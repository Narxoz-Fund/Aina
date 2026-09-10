/*
 * AINA application form — secure Google Apps Script web app.
 *
 * Required Script Properties (Project Settings > Script Properties):
 * - SPREADSHEET_ID: the ID between /d/ and /edit in the Google Sheets URL
 * - SHEET_NAME: the exact tab name that stores applications
 * - TURNSTILE_SECRET: the private Cloudflare Turnstile secret key
 */

const AINA_HEADERS = [
  'Уақыты',
  'Бағыты',
  'Аты-жөні',
  'Телефон нөмірі',
  'Қаласы',
  'Оқу орны',
  'Курсы',
  'Мамандығы',
  'Қосылу мақсаты'
];

const AINA_ALLOWED_HOSTNAMES = ['aina-edu.kz', 'www.aina-edu.kz'];
const AINA_TURNSTILE_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
const AINA_PHONE_COOLDOWN_SECONDS = 10 * 60;

function doGet() {
  return jsonResponse({
    result: 'error',
    error: 'Бұл endpoint тек POST сұраныстарын қабылдайды.'
  });
}

function doPost(e) {
  try {
    if (!e || !e.parameter) {
      throw publicError('Өтінім деректері табылмады.');
    }

    // A hidden field. Legitimate visitors never fill it in.
    if (cleanText(e.parameter.website, 200)) {
      throw publicError('Өтінімді жіберу мүмкін болмады.');
    }

    const application = validateApplication(e.parameter);
    verifyTurnstile(e.parameter['cf-turnstile-response']);
    enforcePhoneCooldown(application.phone);
    appendApplication(application);

    // Saving the application is the primary action. A mail outage must not lose it.
    try {
      sendNotification(application);
    } catch (mailError) {
      console.error('Email notification failed: ' + mailError.message);
    }

    return jsonResponse({ result: 'success' });
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    return jsonResponse({
      result: 'error',
      error: error && error.isPublic
        ? error.message
        : 'Өтінім жіберілмеді. Кейінірек қайта көріңіз.'
    });
  }
}

function validateApplication(parameters) {
  const role = cleanText(parameters.role, 20);
  const fullName = cleanText(parameters.fullName, 100);
  const phone = cleanText(parameters.phoneNumber, 30);
  const city = cleanText(parameters.city, 80);
  const university = cleanText(parameters.university, 150);
  const course = cleanText(parameters.course, 2);
  const specialty = cleanText(parameters.specialty, 150);
  const reason = cleanText(parameters.reason, 1000);

  if (!['volunteer', 'mentor'].includes(role)) {
    throw publicError('Бағытты таңдаңыз.');
  }
  requireValue(fullName, 'Аты-жөнін');
  requireValue(phone, 'Телефон нөмірін');
  requireValue(city, 'Қаланы');
  requireValue(university, 'Оқу орнын');
  requireValue(specialty, 'Мамандықты');

  if (!/^[+0-9()\s-]{7,30}$/.test(phone)) {
    throw publicError('Телефон нөмірі қате енгізілді.');
  }
  if (!['1', '2', '3', '4'].includes(course)) {
    throw publicError('Курсты таңдаңыз.');
  }

  return { role, fullName, phone, city, university, course, specialty, reason };
}

function verifyTurnstile(token) {
  const secret = getRequiredProperty('TURNSTILE_SECRET');
  const responseToken = String(token || '').trim();

  if (!responseToken || responseToken.length > 2048) {
    throw publicError('Қауіпсіздік растауынан өтіңіз.');
  }

  const response = UrlFetchApp.fetch(AINA_TURNSTILE_URL, {
    method: 'post',
    payload: {
      secret: secret,
      response: responseToken
    },
    muteHttpExceptions: true
  });

  let result;
  try {
    result = JSON.parse(response.getContentText());
  } catch (error) {
    throw publicError('Қауіпсіздік растауы уақытша қолжетімсіз. Қайталап көріңіз.');
  }

  if (!result.success || !AINA_ALLOWED_HOSTNAMES.includes(result.hostname)) {
    throw publicError('Қауіпсіздік растауынан өтіңіз де, қайта жіберіңіз.');
  }
}

function enforcePhoneCooldown(phone) {
  const cache = CacheService.getScriptCache();
  const key = 'aina-application:' + hash(phone);

  if (cache.get(key)) {
    throw publicError('Осы телефон нөмірінен өтінім жіберілген. 10 минуттан кейін қайталап көріңіз.');
  }

  cache.put(key, '1', AINA_PHONE_COOLDOWN_SECONDS);
}

function appendApplication(application) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const sheet = getApplicationSheet();
    ensureSheetLayout(sheet);
    assertNoRecentDuplicate(sheet, application.phone);

    // Prefix spreadsheet formula characters so submitted text is never executed as a formula.
    const row = [
      new Date(),
      safeForSheet(application.role),
      safeForSheet(application.fullName),
      safeForSheet(application.phone),
      safeForSheet(application.city),
      safeForSheet(application.university),
      safeForSheet(application.course),
      safeForSheet(application.specialty),
      safeForSheet(application.reason)
    ];

    sheet.appendRow(row);
    const rowNumber = sheet.getLastRow();
    const range = sheet.getRange(rowNumber, 1, 1, AINA_HEADERS.length);
    range.setWrap(true).setVerticalAlignment('middle');
    sheet.getRange(rowNumber, 1).setNumberFormat('dd.MM.yyyy HH:mm:ss');
    sheet.autoResizeRows(rowNumber, 1);
  } finally {
    lock.releaseLock();
  }
}

function getApplicationSheet() {
  const spreadsheetId = getRequiredProperty('SPREADSHEET_ID');
  const sheetName = getRequiredProperty('SHEET_NAME');
  const sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);

  if (!sheet) {
    throw new Error('Configured SHEET_NAME was not found.');
  }
  return sheet;
}

function ensureSheetLayout(sheet) {
  // Migrate a legacy 7-column sheet without a header row once, preserving existing records.
  if (sheet.getRange('A1').getDisplayValue() !== AINA_HEADERS[0]) {
    const lastRow = sheet.getLastRow();

    if (lastRow > 0) {
      const legacyData = sheet.getRange(1, 1, lastRow, 7).getValues();
      sheet.getRange(2, 1, lastRow, 7).setValues(legacyData);
      sheet.getRange(2, 9, lastRow, 1).setValues(legacyData.map(row => [row[6]]));
      sheet.getRange(2, 7, lastRow, 2).clearContent();
    }

    sheet.getRange(1, 1, 1, AINA_HEADERS.length).setValues([AINA_HEADERS]);
  }

  const headerRange = sheet.getRange(1, 1, 1, AINA_HEADERS.length);
  headerRange
    .setBackground('#16A34A')
    .setFontColor('#FFFFFF')
    .setFontWeight('bold')
    .setHorizontalAlignment('center')
    .setVerticalAlignment('middle')
    .setWrap(true);

  sheet.setRowHeight(1, 42);
  sheet.setFrozenRows(1);
  [155, 120, 180, 150, 120, 210, 90, 190, 300]
    .forEach((width, index) => sheet.setColumnWidth(index + 1, width));
}

function sendNotification(application) {
  MailApp.sendEmail({
    to: 'zasarmukiat@gmail.com, tezekbaevnurlan97@gmail.com',
    subject: 'AINA: Жаңа өтінім — ' + application.fullName,
    body:
      'Жаңа адам AINA ұйымына қосылғысы келеді!\n\n' +
      'Таңдаған бағыты: ' + application.role + '\n' +
      'Аты-жөні: ' + application.fullName + '\n' +
      'Телефон нөмірі: ' + application.phone + '\n' +
      'Қаласы: ' + application.city + '\n' +
      'Оқу орны: ' + application.university + '\n' +
      'Курсы: ' + application.course + '\n' +
      'Мамандығы: ' + application.specialty + '\n' +
      'Қосылу мақсаты: ' + application.reason
  });
}

function assertNoRecentDuplicate(sheet, phone) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return;

  // Check recent stored applications as well as CacheService. This remains effective
  // even if the cache expires or Apps Script starts a fresh execution.
  const firstRow = Math.max(2, lastRow - 199);
  const rows = sheet.getRange(firstRow, 1, lastRow - firstRow + 1, 4).getValues();
  const phoneKey = normalizePhone(phone);
  const now = Date.now();
  const cooldownMs = AINA_PHONE_COOLDOWN_SECONDS * 1000;

  const duplicateExists = rows.some(row => {
    const submittedAt = row[0] instanceof Date ? row[0].getTime() : new Date(row[0]).getTime();
    return normalizePhone(row[3]) === phoneKey &&
      !Number.isNaN(submittedAt) &&
      now - submittedAt >= 0 &&
      now - submittedAt < cooldownMs;
  });

  if (duplicateExists) {
    throw publicError('Осы телефон нөмірінен өтінім жіберілген. 10 минуттан кейін қайталап көріңіз.');
  }
}

function getRequiredProperty(name) {
  const value = PropertiesService.getScriptProperties().getProperty(name);
  if (!value) {
    throw new Error('Missing Script Property: ' + name);
  }
  return value;
}

function cleanText(value, maxLength) {
  return String(value || '')
    .replace(/[\u0000-\u001F\u007F]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLength);
}

function requireValue(value, fieldName) {
  if (!value) {
    throw publicError(fieldName + ' енгізіңіз.');
  }
}

function safeForSheet(value) {
  return /^[=+\-@]/.test(value) ? "'" + value : value;
}

function normalizePhone(value) {
  return String(value || '').replace(/\D/g, '');
}

function hash(value) {
  const bytes = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, value);
  return Utilities.base64EncodeWebSafe(bytes);
}

function publicError(message) {
  const error = new Error(message);
  error.isPublic = true;
  return error;
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
