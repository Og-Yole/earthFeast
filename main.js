
        // Mobile menu toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navMenu = document.querySelector('nav ul');

        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                navMenu.classList.remove('active');
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Menu category filtering
        const categoryButtons = document.querySelectorAll('.category-btn');
        const menuItems = document.querySelectorAll('.menu-item');
        
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Get the category
                const category = button.textContent.toLowerCase();
                
                // Filter menu items
                menuItems.forEach(item => {
                    if (category === 'all' || item.dataset.category === category) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });

        // Language toggle
        const languageToggle = document.getElementById('languageToggle');
        const translatableElements = document.querySelectorAll('[data-en][data-cn]');
        let currentLanguage = 'en';

        languageToggle.addEventListener('click', () => {
            currentLanguage = currentLanguage === 'en' ? 'cn' : 'en';
            languageToggle.textContent = currentLanguage === 'en' ? '中文' : 'English';
            
            translatableElements.forEach(element => {
                element.textContent = element.dataset[currentLanguage];
            });
            
            // Update placeholder
            const emailInput = document.querySelector('input[placeholder]');
            if (emailInput) {
                emailInput.placeholder = currentLanguage === 'en' ? 'Your Email' : '您的邮箱';
            }
        });

        // Simple form submission
        // const contactForm = document.querySelector('.contact-form form');
        // if (contactForm) {
        //     contactForm.addEventListener('submit', (e) => {
        //         e.preventDefault();
        //         const message = currentLanguage === 'en' ? 
        //             'Thank you for your message! We will get back to you soon.' : 
        //             '感谢您的留言！我们会尽快回复您。';
        //         alert(message);
        //         contactForm.reset();
        //     });
        // }