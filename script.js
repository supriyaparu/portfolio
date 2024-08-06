document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for anchor links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(scrollLink => {
        scrollLink.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Basic form validation for the contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            if (validateInput(nameInput) && validateInput(emailInput) && validateInput(messageInput)) {
                // Your form submission logic here
                alert('Form submitted successfully!');
            }
        });
    }

    function validateInput(input) {
        const value = input.value.trim();
        if (value === '') {
            alert('Please fill in all fields.');
            return false;
        }
        return true;
    }
});
