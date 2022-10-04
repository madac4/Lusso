import * as flsFunctions from './modules/functions.js';

flsFunctions.isWebp();
flsFunctions.sliders();

const header = document.querySelector('.header');
const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');

if (burger && menu) {
    flsFunctions.burger(burger, menu, header);
}
if (header) {
    flsFunctions.fixedHeader(header);
}

const filtersToggler = document.querySelector('.open-filter');
const filtersCloser = document.querySelector('.close-filter');
const filtersSidebar = document.querySelector('.catalog-sidebar');
if (filtersSidebar) {
    filtersToggler.addEventListener('click', () => {
        filtersSidebar.classList.toggle('open');
        document.body.classList.toggle('lock');
    });
    filtersCloser.addEventListener('click', () => {
        filtersSidebar.classList.remove('open');
        document.body.classList.remove('lock');
    });
}

const hero = document.querySelector('.hero')
const goBottom = document.querySelector('.go-bottom')
const goBottomSection = document.querySelector('.go-button__section')

if (hero) {
    header.classList.add('hidden')
    const heroHeight = hero.offsetHeight
    const main = document.querySelector('main');
    window.addEventListener('scroll', () => {
        main.style.marginTop = null;
        const scrollPos = window.scrollY
        if (scrollPos >= heroHeight) {
            header.classList.remove('hidden')
        } else {
            header.classList.add('hidden')
        }
    })
    goBottom.addEventListener('click', () => {
        const pos = goBottomSection.offsetTop
        window.scrollTo({
            top: pos - 150,
            behavior: 'smooth',
        })
    })
}

// let sliderTemplate = new Swiper('.slider', {
//     effect: 'fade',
//     autoplay:{
//         delay: 3000,
//         disableOnInteraction: false,
//     },
//     observer: true,
//     observeParents: true,
//     slidesPerView: 1,
//     spaceBetween: 0,
//     autoHeight: true,
//     speed: 800,
//     touchRatio: 0,
//     simulateTouch: false,
//     loop: true,
//     preloadImages: false,
//     lazy: true,
//     pagination: {
//         el: '.slider-pagging',
//         clickable: true,
//     },
//     navigation:{
//         nextEl: '.swiper-next',
//         prevEl: '.swiper-prev',
//     },
//     breakpoints: {
//         320: {
//             slidesPerView: 1,
//             spaceBetween: 0,
//             autoHeight: true,
//         },
//         768: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//         },
//         992: {
//             slidesPerView: 3,
//             spaceBetween: 20,
//         },
//         1268: {
//             slidesPerView: 4,
//             spaceBetween: 30,
//         },
//     },
//     on: {
//         lazyImageReady: function () {
//             ibg();
//         },
//     },
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     }
// })

const productSlider = document.querySelectorAll('.slider-product__body');

if (productSlider.length >= 1) {
    for (let i = 0; i < productSlider.length; i++) {
        productSlider[i].classList.add(`slider-product__body--${i}`);
        productSlider[i].parentNode
            .querySelector('.slider-product-controls__arrows')
            .classList.add(`slider-product-${i}-controls__arrows`);

        const thumbs = new Swiper(`.slider-thumb__body`, {
            spaceBetween: 10,
            slidesPerView: 5,
            freeMode: true,
            watchSlidesProgress: true,
        });

        new Swiper(`.slider-product__body--${i}`, {
            grabCursor: true,
            observer: true,
            observeParents: true,
            autoHeight: true,
            slidesPerGroup: 1,
            speed: 800,
            spaceBetween: 20,
            preloadImages: false,
            lazy: true,
            navigation: {
                prevEl: `.slider-product-${i}-controls__arrows .slider-arrow__prev`,
                nextEl: `.slider-product-${i}-controls__arrows .slider-arrow__next`,
            },
            thumbs: {
                swiper: thumbs,
            },
        });
    }
}