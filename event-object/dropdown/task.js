document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const valueTextElement = dropdown.querySelector('.dropdown__value-text');
        const list = dropdown.querySelector('.dropdown__list');
        const items = dropdown.querySelectorAll('.dropdown__item');

        dropdown.querySelector('.dropdown__value').addEventListener('click', function() {
            list.classList.toggle('dropdown__list_active');
        });

        items.forEach(item => {
            item.addEventListener('click', function(event) {
                event.preventDefault();

                const newValue = this.querySelector('.dropdown__link').textContent.trim();

                valueTextElement.textContent = newValue;

                list.classList.remove('dropdown__list_active');
            });
        });
    });

    document.addEventListener('click', function(event) {
        dropdowns.forEach(dropdown => {
            const list = dropdown.querySelector('.dropdown__list');
            if (!dropdown.contains(event.target)) {
                list.classList.remove('dropdown__list_active');
            }
        });
    });
});
