// Efek muncul saat scroll

const boxes = document.querySelectorAll(
'.about-section, .info-box, .team-card'
);

window.addEventListener('scroll', () => {

    boxes.forEach(box => {

        const position = box.getBoundingClientRect().top;
        const screen = window.innerHeight;

        if(position < screen - 100){
            box.classList.add('show');
        }

    });

});