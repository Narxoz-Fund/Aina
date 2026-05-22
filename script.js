document.addEventListener('DOMContentLoaded', () => {

    // 1. Navbar Scroll Effect (Glassmorphism)
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Scroll Animations (IntersectionObserver for Premium Feel)
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

    // Apply observer to all animated elements
    document.querySelectorAll('.animate-on-scroll, .slide-in-left, .slide-in-right').forEach(el => {
        animateOnScrollObserver.observe(el);
    });

    // 3. Role selection logic (join.html)
    const roleCards = document.querySelectorAll('.role-card');
    const selectedRoleInput = document.getElementById('selectedRole');

    if (roleCards.length > 0 && selectedRoleInput) {
        roleCards.forEach(card => {
            card.addEventListener('click', () => {
                roleCards.forEach(c => c.classList.remove('active'));
                card.classList.add('active');
                selectedRoleInput.value = card.getAttribute('data-role');
            });
        });
    }

    // 4. Form submission logic (join.html)
    const regForm = document.getElementById('regForm');
    const regFormContainer = document.getElementById('regFormContainer');
    const regSuccessState = document.getElementById('regSuccessState');

    if (regForm) {
        regForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // --- GOOGLE SHEETS & EMAIL БАЙЛАНЫСЫ ---
            const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw49JSoHQzQit2DPfhoe61wP17PVJHOSmFm6wm-KcyV8l8QAsZ2d5wcEoJw4KSDbXLzYw/exec';

            const submitBtn = regForm.querySelector('.btn-submit');
            const originalText = submitBtn.innerHTML;

            try {
                submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Күте тұрыңыз...';
                submitBtn.disabled = true;

                // URLSearchParams - CORS preflight болдырмайды (simple request)
                const params = new URLSearchParams(new FormData(regForm));

                // GET сұранысы + параметрлер URL-ға қосылады → CORS мәселесі жоқ
                const response = await fetch(SCRIPT_URL + '?' + params.toString(), {
                    method: 'GET',
                });

                const result = await response.json();

                if (result.result === 'success') {
                    if (regFormContainer) regFormContainer.classList.add('hidden');
                    if (regSuccessState) regSuccessState.classList.remove('hidden');
                } else {
                    throw new Error(result.error || 'Белгісіз қате');
                }
            } catch (error) {
                console.error('Submission Error:', error);
                alert('Кешіріңіз, қате шықты. Кейінірек қайта көріңіз.\n' + error.message);
            } finally {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        });
    }
});
