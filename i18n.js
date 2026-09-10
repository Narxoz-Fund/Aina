/* =======================================
   AINA - Internationalization (i18n)
   Қазақ (kk) / Русский (ru)
   ======================================= */

const translations = {
    kk: {
        // --- Navbar / Общие ---
        "nav.back": "Артқа",
        "nav.join_btn": "Қосылу",

        // --- Footer ---
        "footer.desc": "Студенттер мен балаларды біріктіретін жарық көпір.",
        "footer.motto": "«Ерім дейтін ел болмаса, елім дейтін ер болмайды»",
        "footer.nav_title": "Навигация",
        "footer.about": "Біз туралы",
        "footer.projects": "Жобалар",
        "footer.clubs": "Клубтар",
        "footer.contact_title": "Байланыс",
        "footer.city": "Алматы қаласы",
        "footer.copyright": "© 2026 AINA Қайырымдылық және Жастар қауымдастығы. Барлық құқықтар қорғалған.",

        // --- index.html ---
        "index.hero_title": "Білім мен мейірімнің <br> <span class=\"highlight\">жарық көпірі</span>",
        "index.hero_subtitle": "Біз жай ғана көмек бермейміз — біз болашаққа бағыт көрсетеміз. AINA қауымдастығы студенттер мен балалардың арасын жалғап, білімге деген құштарлықты оятады.",
        "index.hero_btn1": "Волонтер болу",
        "index.hero_btn2": "Толығырақ білу",
        "index.section_badge": "Бізге қосылыңыз",
        "index.section_title": "AINA-мен бірге әлемді өзгерту",
        "index.section_subtitle": "Біздің қауымдастықтың бір бөлшегі болып, жастардың дамуына үлес қосыңыз.",
        "index.card1_title": "Біз туралы",
        "index.card1_desc": "AINA ұйымының миссиясы, мақсаттары және басты құндылықтарымен танысыңыз.",
        "index.card2_title": "Волонтер болу",
        "index.card2_desc": "Игі істерге атсалысып, қоғамға пайдаңызды тигізіңіз. Командамызға қосылыңыз!",
        "index.card3_title": "Байланыс",
        "index.card3_desc": "Сұрақтарыңыз немесе ұсыныстарыңыз болса, бізбен байланысуға әрқашан қуаныштымыз.",

        // --- about.html ---
        "about.hero_title": "Біз туралы",
        "about.hero_subtitle": "AINA — студенттер мен балаларды байланыстыратын білім мен сенім көпірі.",
        "about.badge": "Мәселе және Шешім",
        "about.section_title": "Сенім мен Мүмкіндік",
        "about.p1": "Қоғамдағы жетім балалар мен ата-ана қамқорлығынсыз қалған жеткіншектерге қатысты ең басты мәселе — олардың киімі немесе тамағы емес. Ең қауіптісі — олардың болашаққа деген үмітсіздігі және қоғамдағы тең мүмкіндіктердің болмауы.",
        "about.p2": "<strong>AINA</strong> — бұл белсенді студенттер мен балалар үйінің тәрбиеленушілері арасындағы нағыз <strong>КӨПІР</strong>. Біздің шешім: әрбір университетте AINA клубтарын ашу арқылы, балаларды студенттік өмірге араластыру, менторлық жасау және оларды мамандық таңдауға, көшбасшылыққа бағыттау.",
        "about.motto_title": "«Үмітсіз шайтан»",
        "about.motto_text": "Біздің басты миссиямыз — балаларға білім мен студенттік өмірдің жарқын жақтарын көрсетіп, олардың жүрегіне «менің де қолымнан келеді» деген үміт отын жағу.",
        "about.badge_img": "Білім мен Сенім",
        "about.val1_title": "Махаббат",
        "about.val1_desc": "Толеранттылық, құрметтілік, мейірім, бауырмалдық және сүйіспеншілік.",
        "about.val2_title": "Отбасы",
        "about.val2_desc": "Бір-біріне қолдау көрсету, ортаға бейімделу, кешіре білу, ашықтық және бір-бірін сағыну.",
        "about.val3_title": "Шам",
        "about.val3_desc": "Білім мен сенім арқылы қараңғылықты сейілту, өмір жолын нұсқап, жол көрсету.",
        "about.val4_title": "Жауапкершілік",
        "about.val4_desc": "Болашақ алдындағы, жүрегі жаралы балалар мен тұтас қоғам алдындағы қасиетті міндет.",
        "about.proj_badge": "Біздің экожүйе",
        "about.proj_title": "Қалай көмектесеміз?",
        "about.proj_subtitle": "Біз тек кездесіп қана қоймаймыз, балаларға жан-жақты білім мен тәрбие беретін үлкен экожүйе құрамыз.",
        "about.proj1_title": "Интеллектуалды форматтар",
        "about.proj1_desc": "<strong>Командалық жарыстар мен ойындар:</strong> Debate, MUN, Case Competition, Hackathon, Startup Pitch сияқты ауқымды жобалар.",
        "about.proj2_title": "Еркін сұхбат алаңы",
        "about.proj2_desc": "Балалармен <strong>махаббат психологиясы, әлемдік діндер, саясат, тарих және қоғамдағы толеранттылық</strong> туралы ашық, тең дәрежеде сөйлесіп, олардың сыни ойлауын дамытамыз.",
        "about.proj3_title": "Студенттік Менторлық",
        "about.proj3_desc": "Нархоз сияқты жетекші ЖОО студенттері тікелей қолдау көрсетеді. Балаларға нақты студенттік өмірді сезінуге мүмкіндік беріп, мамандықтардың қыр-сырын түсіндіреміз.",
        "about.clubs_title": "ЖОО-дағы AINA Клубтары",
        "about.clubs_subtitle": "Бүгінгі таңда университет қабырғасындағы клуб — жай ғана ұйым емес. Ол болашаққа салынған үлкен инвестиция және жүрекпен жасалатын игі іс.",
        "about.club1_title": "Көшбасшылық",
        "about.club1_desc": "Клуб ашу (Founder болу) арқылы өзіңіздің мықты ұйымдастырушылық және басқарушылық дағдыларыңызды қалыптастырасыз.",
        "about.club2_title": "Резюме мен Тәжірибе",
        "about.club2_desc": "Халықаралық магистратураға немесе жұмысқа тұрғанда әлеуметтік маңызы бар жобалар (NGO) өте үлкен артықшылық береді.",
        "about.club3_title": "Үлкен Нетворкинг",
        "about.club3_desc": "Еліміздің жетекші жоғары оқу орындарының белсенді студенттерімен ортақ комьюнити құру мүмкіндігіне ие боласыз.",
        "about.club_btn": "Университетімнен клуб ашу",
        "about.inv_badge": "Инвесторлар мен Серіктестерге",
        "about.inv_title": "Болашаққа салынған нақты капитал",
        "about.inv_p1": "Сіздің қолдауыңыз — бұл жай ғана қайырымдылық емес, саналы, білімді және жауапты жаңа буынды қалыптастыруға салынған инвестиция. AINA жұмысында тек эмоцияға емес, нақты нәтиже мен жүйеге сүйенеді.",
        "about.inv_p2": "Біздің <strong>студенттік клубтардың (мысалы, Нархоз университетіндегідей)</strong> нақты міндеттері инвесторларға толық сенім ұялатады:",
        "about.inv_li1": "<i class=\"fa-solid fa-gears\"></i> <strong>Жүйелі басқару:</strong> Қаржы ағынын бақылау, келіссөздер жүргізіп инвесторлар тарту, маркетинг, статистика және аналитика жүргізу.",
        "about.inv_li2": "<i class=\"fa-solid fa-link\"></i> <strong>Тікелей байланыс:</strong> Жоғары оқу орны мен Foundation (қор) арасында делдалсыз, ашық қатынас орнату.",
        "about.inv_li3": "<i class=\"fa-solid fa-user-shield\"></i> <strong>Сапалы мамандар:</strong> Жауапты менторлар дайындау, жұмыс барысындағы этика мен тәртіпті қатаң қадағалау.",
        "about.inv_btn": "Серіктестік ұсыныс алу",
        "about.stat1": "Ментор студенттер",
        "about.stat2": "Қамтылған балалар",
        "about.stat3": "ЖОО-дағы клубтар",
        "about.stat4": "Өткізілген іс-шаралар",

        // --- contact.html ---
        "contact.hero_title": "Бізбен байланыс",
        "contact.hero_subtitle": "Сұрақтарыңыз болса, бізбен кез келген ыңғайлы жолмен хабарласыңыз.",
        "contact.phone_title": "Телефон арқылы",
        "contact.whatsapp_title": "WhatsApp желісі",
        "contact.whatsapp_desc": "Кез келген уақытта жазыңыз",
        "contact.email_title": "Электронды пошта",

        // --- join.html ---
        "join.hero_title": "AINA-ға қосылу",
        "join.hero_subtitle": "Волонтер немесе ментор ретінде қосылып, бір баланың болашағына әсер етіңіз.",
        "join.welcome": "Қош келдіңіз!",
        "join.choose": "Өзіңізге жақын бағытты таңдап, анкетаны толтырыңыз",
        "join.volunteer_title": "Волонтер",
        "join.volunteer_desc": "Іс-шараларға көмектесу",
        "join.mentor_title": "Ментор",
        "join.mentor_desc": "Тәжірибемен бөлісу",
        "join.label_name": "Аты-жөні",
        "join.label_phone": "Телефон нөмірі",
        "join.label_city": "Қала",
        "join.label_university": "Оқу",
        "join.placeholder_university": "Нархоз Университеті",
        "join.label_course": "Курс",
        "join.course_placeholder": "Курсты таңдаңыз",
        "join.course_1": "1-курс",
        "join.course_2": "2-курс",
        "join.course_3": "3-курс",
        "join.course_4": "4-курс",
        "join.label_specialty": "Мамандық",
        "join.placeholder_specialty": "Мысалы: Қаржы",
        "join.label_reason": "Неге AINA-ға қосылғыңыз келеді?",
        "join.placeholder_reason": "Қысқаша мақсатыңызды жазыңыз...",
        "join.submit_btn": "Өтінім жіберу",
        "join.hint": "Біз сізбен жақын арада хабарласамыз",
        "join.success_title": "Рақмет!",
        "join.success_desc": "Өтініміңіз қабылданды. Жақын арада сізбен хабарласамыз.",
        "join.success_btn": "Басты бетке қайту",
    },

    ru: {
        // --- Navbar / Общие ---
        "nav.back": "Назад",
        "nav.join_btn": "Присоединиться",

        // --- Footer ---
        "footer.desc": "Светлый мост, объединяющий студентов и детей.",
        "footer.motto": "«Нет страны без героев, нет героев без страны»",
        "footer.nav_title": "Навигация",
        "footer.about": "О нас",
        "footer.projects": "Проекты",
        "footer.clubs": "Клубы",
        "footer.contact_title": "Контакты",
        "footer.city": "г. Алматы",
        "footer.copyright": "© 2026 AINA Благотворительное и молодёжное сообщество. Все права защищены.",

        // --- index.html ---
        "index.hero_title": "Светлый мост <br> <span class=\"highlight\">знания и доброты</span>",
        "index.hero_subtitle": "Мы не просто помогаем — мы указываем путь в будущее. Сообщество AINA соединяет студентов и детей, пробуждая в них жажду знаний.",
        "index.hero_btn1": "Стать волонтёром",
        "index.hero_btn2": "Узнать подробнее",
        "index.section_badge": "Присоединяйтесь к нам",
        "index.section_title": "Меняй мир вместе с AINA",
        "index.section_subtitle": "Стань частью нашего сообщества и внеси вклад в развитие молодёжи.",
        "index.card1_title": "О нас",
        "index.card1_desc": "Узнайте о миссии, целях и ключевых ценностях организации AINA.",
        "index.card2_title": "Стать волонтёром",
        "index.card2_desc": "Участвуй в добрых делах и приносить пользу обществу. Присоединяйся к команде!",
        "index.card3_title": "Контакты",
        "index.card3_desc": "Если у вас есть вопросы или предложения, мы всегда рады с вами связаться.",

        // --- about.html ---
        "about.hero_title": "О нас",
        "about.hero_subtitle": "AINA — мост знаний и доверия, связывающий студентов и детей.",
        "about.badge": "Проблема и Решение",
        "about.section_title": "Доверие и Возможность",
        "about.p1": "Главная проблема детей-сирот и подростков без родительской опеки — не одежда и не питание. Самое опасное — это их безнадёжность в отношении будущего и отсутствие равных возможностей в обществе.",
        "about.p2": "<strong>AINA</strong> — это настоящий <strong>МОСТ</strong> между активными студентами и воспитанниками детских домов. Наше решение: открывать клубы AINA в каждом университете, вовлекать детей в студенческую жизнь, наставлять их и направлять к выбору профессии и лидерству.",
        "about.motto_title": "«Нет безнадёжных»",
        "about.motto_text": "Наша главная миссия — показать детям светлые стороны образования и студенческой жизни, зажечь в их сердцах веру: «я тоже смогу».",
        "about.badge_img": "Знание и Доверие",
        "about.val1_title": "Любовь",
        "about.val1_desc": "Толерантность, уважение, доброта, братство и любовь.",
        "about.val2_title": "Семья",
        "about.val2_desc": "Поддержка друг друга, адаптация в коллективе, умение прощать, открытость и взаимная забота.",
        "about.val3_title": "Свет",
        "about.val3_desc": "Рассеивать тьму через знание и веру, указывать жизненный путь и направлять.",
        "about.val4_title": "Ответственность",
        "about.val4_desc": "Священный долг перед будущим, перед детьми с ранеными душами и перед всем обществом.",
        "about.proj_badge": "Наша экосистема",
        "about.proj_title": "Как мы помогаем?",
        "about.proj_subtitle": "Мы не просто встречаемся — мы строим большую экосистему всестороннего образования и воспитания детей.",
        "about.proj1_title": "Интеллектуальные форматы",
        "about.proj1_desc": "<strong>Командные соревнования и игры:</strong> Debate, MUN, Case Competition, Hackathon, Startup Pitch и другие масштабные проекты.",
        "about.proj2_title": "Площадка открытого диалога",
        "about.proj2_desc": "Открыто обсуждаем с детьми <strong>психологию отношений, мировые религии, политику, историю и толерантность</strong>, развивая их критическое мышление.",
        "about.proj3_title": "Студенческое наставничество",
        "about.proj3_desc": "Студенты ведущих вузов, таких как Нархоз, оказывают прямую поддержку. Даём детям возможность почувствовать настоящую студенческую жизнь и объясняем суть профессий.",
        "about.clubs_title": "Клубы AINA в вузах",
        "about.clubs_subtitle": "Сегодня клуб в стенах университета — это не просто организация. Это большая инвестиция в будущее и доброе дело, делаемое от сердца.",
        "about.club1_title": "Лидерство",
        "about.club1_desc": "Открыв клуб (став Founder), вы развиваете сильные организаторские и управленческие навыки.",
        "about.club2_title": "Резюме и Опыт",
        "about.club2_desc": "При поступлении в международную магистратуру или на работу проекты социальной значимости (НКО) дают большое преимущество.",
        "about.club3_title": "Нетворкинг",
        "about.club3_desc": "Вы получаете возможность создать общее сообщество с активными студентами ведущих вузов страны.",
        "about.club_btn": "Открыть клуб в своём университете",
        "about.inv_badge": "Инвесторам и Партнёрам",
        "about.inv_title": "Реальный капитал, вложенный в будущее",
        "about.inv_p1": "Ваша поддержка — это не просто благотворительность, это инвестиция в формирование сознательного, образованного и ответственного нового поколения. AINA опирается не только на эмоции, но и на конкретные результаты и систему.",
        "about.inv_p2": "Конкретные обязательства наших <strong>студенческих клубов (например, в Университете Нархоз)</strong> внушают инвесторам полное доверие:",
        "about.inv_li1": "<i class=\"fa-solid fa-gears\"></i> <strong>Системное управление:</strong> Контроль финансовых потоков, привлечение инвесторов, маркетинг, статистика и аналитика.",
        "about.inv_li2": "<i class=\"fa-solid fa-link\"></i> <strong>Прямая связь:</strong> Открытые, прозрачные отношения между вузом и Фондом без посредников.",
        "about.inv_li3": "<i class=\"fa-solid fa-user-shield\"></i> <strong>Качественные специалисты:</strong> Подготовка ответственных наставников, строгий контроль этики и дисциплины.",
        "about.inv_btn": "Получить предложение о партнёрстве",
        "about.stat1": "Студенты-наставники",
        "about.stat2": "Охваченных детей",
        "about.stat3": "Клубов в вузах",
        "about.stat4": "Проведённых мероприятий",

        // --- contact.html ---
        "contact.hero_title": "Свяжитесь с нами",
        "contact.hero_subtitle": "Если у вас есть вопросы, свяжитесь с нами любым удобным способом.",
        "contact.phone_title": "По телефону",
        "contact.whatsapp_title": "WhatsApp",
        "contact.whatsapp_desc": "Пишите в любое время",
        "contact.email_title": "Электронная почта",

        // --- join.html ---
        "join.hero_title": "Присоединиться к AINA",
        "join.hero_subtitle": "Станьте волонтёром или ментором и повлияйте на будущее одного ребёнка.",
        "join.welcome": "Добро пожаловать!",
        "join.choose": "Выберите подходящее направление и заполните анкету",
        "join.volunteer_title": "Волонтёр",
        "join.volunteer_desc": "Помощь в мероприятиях",
        "join.mentor_title": "Ментор",
        "join.mentor_desc": "Делиться опытом",
        "join.label_name": "ФИО",
        "join.label_phone": "Номер телефона",
        "join.label_city": "Город",
        "join.label_university": "Место учёбы",
        "join.placeholder_university": "Университет Нархоз",
        "join.label_course": "Курс",
        "join.course_placeholder": "Выберите курс",
        "join.course_1": "1 курс",
        "join.course_2": "2 курс",
        "join.course_3": "3 курс",
        "join.course_4": "4 курс",
        "join.label_specialty": "Специальность",
        "join.placeholder_specialty": "Например: Финансы",
        "join.label_reason": "Почему вы хотите присоединиться к AINA?",
        "join.placeholder_reason": "Напишите кратко о своей цели...",
        "join.submit_btn": "Отправить заявку",
        "join.hint": "Мы свяжемся с вами в ближайшее время",
        "join.success_title": "Спасибо!",
        "join.success_desc": "Ваша заявка принята. Мы свяжемся с вами в ближайшее время.",
        "join.success_btn": "На главную",
    },

    en: {
        "nav.back": "Back",
        "nav.join_btn": "Join us",

        "footer.desc": "A bright bridge connecting students and children.",
        "footer.motto": "“There are no heroes without a country, and no country without its heroes.”",
        "footer.nav_title": "Navigation",
        "footer.about": "About us",
        "footer.projects": "Projects",
        "footer.clubs": "Clubs",
        "footer.contact_title": "Contact",
        "footer.city": "Almaty",
        "footer.copyright": "© 2026 AINA Charity and Youth Community. All rights reserved.",

        "index.hero_title": "A bright bridge of <br> <span class=\"highlight\">knowledge and kindness</span>",
        "index.hero_subtitle": "We do more than help — we point the way to the future. AINA connects students and children, awakening a passion for learning.",
        "index.hero_btn1": "Become a volunteer",
        "index.hero_btn2": "Learn more",
        "index.section_badge": "Join us",
        "index.section_title": "Change the world with AINA",
        "index.section_subtitle": "Become part of our community and contribute to young people's development.",
        "index.card1_title": "About us",
        "index.card1_desc": "Learn about AINA's mission, goals, and core values.",
        "index.card2_title": "Become a volunteer",
        "index.card2_desc": "Take part in good deeds and make a difference in society. Join our team!",
        "index.card3_title": "Contact",
        "index.card3_desc": "We are always happy to hear from you if you have questions or suggestions.",

        "about.hero_title": "About us",
        "about.hero_subtitle": "AINA is a bridge of knowledge and trust connecting students and children.",
        "about.badge": "The challenge and our solution",
        "about.section_title": "Trust and opportunity",
        "about.p1": "The main challenge facing orphans and adolescents without parental care is not clothing or food. The most dangerous thing is hopelessness about their future and a lack of equal opportunities in society.",
        "about.p2": "<strong>AINA</strong> is a true <strong>BRIDGE</strong> between active students and children from orphanages. Our solution is to open AINA clubs at every university, involve children in student life, mentor them, and guide them towards career choice and leadership.",
        "about.motto_title": "“No one is without hope”",
        "about.motto_text": "Our key mission is to show children the bright side of education and student life, and spark the belief in their hearts: “I can do it too.”",
        "about.badge_img": "Knowledge and trust",
        "about.val1_title": "Love",
        "about.val1_desc": "Tolerance, respect, kindness, solidarity, and love.",
        "about.val2_title": "Family",
        "about.val2_desc": "Supporting each other, adapting to the community, forgiveness, openness, and mutual care.",
        "about.val3_title": "Light",
        "about.val3_desc": "Dispel darkness through knowledge and faith; show and guide the way in life.",
        "about.val4_title": "Responsibility",
        "about.val4_desc": "A sacred duty to the future, to children with wounded hearts, and to society as a whole.",
        "about.proj_badge": "Our ecosystem",
        "about.proj_title": "How do we help?",
        "about.proj_subtitle": "We do more than meet — we create a broad ecosystem of education and development for children.",
        "about.proj1_title": "Intellectual formats",
        "about.proj1_desc": "<strong>Team competitions and games:</strong> large-scale projects such as Debate, MUN, Case Competition, Hackathon, and Startup Pitch.",
        "about.proj2_title": "An open dialogue space",
        "about.proj2_desc": "We openly discuss <strong>relationship psychology, world religions, politics, history, and tolerance in society</strong> with children as equals, developing their critical thinking.",
        "about.proj3_title": "Student mentorship",
        "about.proj3_desc": "Students from leading universities such as Narxoz offer direct support, helping children experience real student life and understand different professions.",
        "about.clubs_title": "AINA clubs at universities",
        "about.clubs_subtitle": "A university club is more than an organization. It is a major investment in the future and a heartfelt act of kindness.",
        "about.club1_title": "Leadership",
        "about.club1_desc": "By opening a club and becoming a founder, you develop strong organizational and management skills.",
        "about.club2_title": "Resume and experience",
        "about.club2_desc": "Socially significant projects (NGOs) are a major advantage when applying for international master's programs or jobs.",
        "about.club3_title": "Networking",
        "about.club3_desc": "You can build a shared community with active students from the country's leading universities.",
        "about.club_btn": "Open a club at my university",
        "about.inv_badge": "For investors and partners",
        "about.inv_title": "Real capital invested in the future",
        "about.inv_p1": "Your support is more than charity; it is an investment in a conscious, educated, and responsible new generation. AINA relies not only on emotion, but on tangible results and a system.",
        "about.inv_p2": "The concrete responsibilities of our <strong>student clubs (for example, at Narxoz University)</strong> inspire complete confidence in investors:",
        "about.inv_li1": "<i class=\"fa-solid fa-gears\"></i> <strong>Systematic management:</strong> managing financial flows, attracting investors through negotiations, marketing, statistics, and analytics.",
        "about.inv_li2": "<i class=\"fa-solid fa-link\"></i> <strong>Direct connection:</strong> open and transparent relations between the university and the Foundation without intermediaries.",
        "about.inv_li3": "<i class=\"fa-solid fa-user-shield\"></i> <strong>Qualified mentors:</strong> preparing responsible mentors and strictly monitoring ethics and discipline.",
        "about.inv_btn": "Request a partnership proposal",
        "about.stat1": "Student mentors",
        "about.stat2": "Children reached",
        "about.stat3": "University clubs",
        "about.stat4": "Events held",

        "contact.hero_title": "Contact us",
        "contact.hero_subtitle": "If you have any questions, reach out to us in any convenient way.",
        "contact.phone_title": "By phone",
        "contact.whatsapp_title": "WhatsApp",
        "contact.whatsapp_desc": "Message us anytime",
        "contact.email_title": "Email",

        "join.hero_title": "Join AINA",
        "join.hero_subtitle": "Join as a volunteer or mentor and make a difference in a child's future.",
        "join.welcome": "Welcome!",
        "join.choose": "Choose the role closest to you and complete the application.",
        "join.volunteer_title": "Volunteer",
        "join.volunteer_desc": "Help at events",
        "join.mentor_title": "Mentor",
        "join.mentor_desc": "Share your experience",
        "join.label_name": "Full name",
        "join.label_phone": "Phone number",
        "join.label_city": "City",
        "join.label_university": "University",
        "join.placeholder_university": "Narxoz University",
        "join.label_course": "Year of study",
        "join.course_placeholder": "Select your year",
        "join.course_1": "Year 1",
        "join.course_2": "Year 2",
        "join.course_3": "Year 3",
        "join.course_4": "Year 4",
        "join.label_specialty": "Field of study",
        "join.placeholder_specialty": "For example: Finance",
        "join.label_reason": "Why would you like to join AINA?",
        "join.placeholder_reason": "Briefly describe your motivation...",
        "join.submit_btn": "Submit application",
        "join.hint": "We will contact you soon",
        "join.success_title": "Thank you!",
        "join.success_desc": "Your application has been received. We will contact you soon.",
        "join.success_btn": "Back to home",
    }
};

// =============================================
// Тіл ауыстыру логикасы / Language switch logic
// =============================================

function applyLanguage(lang) {
    const t = translations[lang];
    if (!t) return;

    // Apply text to all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            el.innerHTML = t[key];
        }
    });

    // Apply placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key] !== undefined) {
            el.placeholder = t[key];
        }
    });

    // Update html lang attribute
    document.documentElement.lang = lang;

    // Update active state on switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Save to localStorage
    localStorage.setItem('aina_lang', lang);
}

function initLanguage() {
    const savedLang = localStorage.getItem('aina_lang') || 'kk';
    applyLanguage(savedLang);
}

// Attach click events to language buttons
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            applyLanguage(btn.getAttribute('data-lang'));
        });
    });

    // Apply saved language on page load
    initLanguage();
});
