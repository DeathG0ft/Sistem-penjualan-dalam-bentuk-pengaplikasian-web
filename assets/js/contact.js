const items = document.querySelectorAll(
'.contact-card, .contact-form-box'
);

window.addEventListener('scroll', () => {

    items.forEach(item => {

        const position = item.getBoundingClientRect().top;
        const screen = window.innerHeight;

        if(position < screen - 100){
            item.classList.add('show');
        }

    });

});