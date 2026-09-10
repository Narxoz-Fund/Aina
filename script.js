document.addEventListener('DOMContentLoaded', () => {

    // 1. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');

    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // 2. Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const animateOnScrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                animateOnScrollObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document
        .querySelectorAll('.animate-on-scroll, .slide-in-left, .slide-in-right')
        .forEach(el => {
            animateOnScrollObserver.observe(el);
        });

    // 3. Role selection
    const roleCards = document.querySelectorAll('.role-card');
    const selectedRoleInput = document.getElementById('selectedRole');

    if (roleCards.length > 0 && selectedRoleInput) {
        roleCards.forEach(card => {
            card.addEventListener('click', () => {
                roleCards.forEach(c => c.classList.remove('active'));

                card.classList.add('active');

                selectedRoleInput.value =
                    card.getAttribute('data-role');
            });
        });
    }

    // 4. Form submission
    const regForm = document.getElementById('regForm');
    const regFormContainer = document.getElementById('regFormContainer');
    const regSuccessState = document.getElementById('regSuccessState');

    if (regForm) {

        let isSubmitting = false;

        regForm.addEventListener('submit', async (e) => {

            e.preventDefault();

            // Бір рет жіберіліп жатқан кезде қайта жіберуге болмайды
            if (isSubmitting) {
                return;
            }

            isSubmitting = true;

            const SCRIPT_URL =
                'https://script.google.com/macros/s/AKfycbw49JSoHQzQit2DPfhoe61wP17PVJHOSmFm6wm-KcyV8l8QAsZ2d5wcEoJw4KSDbXLzYw/exec';

            const submitBtn =
                regForm.querySelector('.btn-submit');

            if (!submitBtn) {
                isSubmitting = false;
                return;
            }

            const originalText = submitBtn.innerHTML;

            try {

                // Батырманы бірден бұғаттау
                submitBtn.disabled = true;
                submitBtn.style.pointerEvents = 'none';

                submitBtn.innerHTML =
                    '<i class="fa-solid fa-spinner fa-spin"></i> Күте тұрыңыз...';

                const params =
                    new URLSearchParams(new FormData(regForm));

                const response = await fetch(SCRIPT_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type':
                            'application/x-www-form-urlencoded;charset=UTF-8'
                    },
                    body: params.toString()
                });

                if (!response.ok) {
                    throw new Error(
                        'Сервер қатесі: ' + response.status
                    );
                }

                const result = await response.json();

                if (result.result === 'success') {

                    // Форма жабылады
                    if (regFormContainer) {
                        regFormContainer.classList.add('hidden');
                    }

                    // Сәтті жіберілді
                    if (regSuccessState) {
                        regSuccessState.classList.remove('hidden');
                    }

                } else {

                    throw new Error(
                        result.error || 'Белгісіз қате'
                    );
                }

            } catch (error) {

                console.error('Submission Error:', error);

                alert(
                    'Кешіріңіз, өтінім жіберілмеді.\n\n' +
                    error.message
                );

                // Қате болған жағдайда қайта жіберуге рұқсат
                isSubmitting = false;
                submitBtn.disabled = false;
                submitBtn.style.pointerEvents = '';
                submitBtn.innerHTML = originalText;

                return;
            }

            // Сәтті болғаннан кейін қайта жіберуге болмайды
            submitBtn.disabled = true;
            submitBtn.style.pointerEvents = 'none';

        });
    }
});