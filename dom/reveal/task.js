document.addEventListener('DOMContentLoaded', function() {
    const revealElements = document.querySelectorAll('.reveal');

    function checkReveal() {
        const windowHeight = window.innerHeight;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150; 

            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('reveal_active');
            }
        });
    }

    checkReveal();


    window.addEventListener('scroll', checkReveal);
});
