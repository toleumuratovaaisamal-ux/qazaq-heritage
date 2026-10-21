document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // Task 1. Form Validation (Валидация формы)
    // ==========================================
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            let isValid = true;

            const nameInput = document.getElementById('fullName');
            const emailInput = document.getElementById('emailAddress');
            const passwordInput = document.getElementById('password');
            const confirmPasswordInput = document.getElementById('confirmPassword');

            // Очистка предыдущих ошибок
            document.querySelectorAll('.invalid-feedback').forEach(el => el.textContent = '');
            document.querySelectorAll('.form-control').forEach(el => el.classList.remove('is-invalid'));

            // 1. Проверка имени
            if (!nameInput.value.trim()) {
                showError(nameInput, 'Full name is required.');
                isValid = false;
            }

            // 2. Проверка Email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailInput.value.trim())) {
                showError(emailInput, 'Please enter a valid email address.');
                isValid = false;
            }

            // 3. Проверка пароля (минимум 6 символов)
            if (passwordInput && passwordInput.value.length < 6) {
                showError(passwordInput, 'Password must be at least 6 characters long.');
                isValid = false;
            }

            // 4. Подтверждение пароля
            if (confirmPasswordInput && confirmPasswordInput.value !== passwordInput.value) {
                showError(confirmPasswordInput, 'Passwords do not match.');
                isValid = false;
            }

            if (isValid) {
                alert('Form submitted successfully!');
                contactForm.reset();
            }
        });
    }

    function showError(inputElement, message) {
        inputElement.classList.add('is-invalid');
        const errorDiv = inputElement.nextElementSibling;
        if (errorDiv && errorDiv.classList.contains('invalid-feedback')) {
            errorDiv.textContent = message;
        }
    }


    // ==========================================
    // Task 2. Accordion FAQ (Аккордеон)
    // ==========================================
    const accordionHeaders = document.querySelectorAll('.faq-question');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            const content = accordionItem.querySelector('.faq-answer');

            const isOpen = content.style.display === 'block';
            
            // Закрываем все остальные аккордеоны
            document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');
            
            // Переключаем текущий
            content.style.display = isOpen ? 'none' : 'block';
        });
    });


    // ==========================================
    // Task 3. Popup Modal Form (Модальное окно)
    // ==========================================
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalOverlay = document.getElementById('subscriptionModal');

    if (openModalBtn && modalOverlay) {
        openModalBtn.addEventListener('click', () => {
            modalOverlay.style.display = 'flex';
        });

        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', () => {
                modalOverlay.style.display = 'none';
            });
        }

        window.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.style.display = 'none';
            }
        });
    }


    // ==========================================
    // Task 4. Change Background Color (Смена фона)
    // ==========================================
    const colorBtn = document.getElementById('changeBgBtn');
    const colors = ['#F7F5F0', '#EAE7DC', '#D8C3A5', '#E8A87C', '#C38D9E', '#E27D60'];
    let colorIndex = 0;

    if (colorBtn) {
        colorBtn.addEventListener('click', () => {
            colorIndex = (colorIndex + 1) % colors.length;
            document.body.style.backgroundColor = colors[colorIndex];
        });
    }


    // ==========================================
    // Task 5. Display Current Date and Time (Время и дата)
    // ==========================================
    function updateDateTime() {
        const dateTimeElement = document.getElementById('dateTimeDisplay');
        if (dateTimeElement) {
            const now = new Date();
            const options = { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric', 
                hour: '2-digit', 
                minute: '2-digit', 
                second: '2-digit' 
            };
            dateTimeElement.textContent = now.toLocaleDateString('en-US', options);
        }
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);
});