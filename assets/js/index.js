// =========================
// NEXORA CARD
// =========================
const slider = document.querySelector('.product-scroll');

slider.addEventListener('wheel', (e) => {
    e.preventDefault();
    slider.scrollLeft += e.deltaY;
});

// =========================
// NEXORA CAROUSEL
// =========================

document.addEventListener("DOMContentLoaded", function () {

    const carousel = document.querySelector("#carouselExampleFade");

    if (carousel) {
        new bootstrap.Carousel(carousel, {
            interval: 5000, // ganti slide setiap 5 detik
            ride: "carousel",
            pause: "hover",
            wrap: true,
            touch: true
        });
    }

});