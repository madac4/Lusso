export function isWebp() {
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src =
            'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    }
    testWebP(function (support) {
        if (support == true) {
            document.querySelector('body').classList.add('webp');
        } else {
            document.querySelector('body').classList.add('no-webp');
        }
    });
}

export function burger(burger, menu, header) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        document.body.classList.toggle('lock');
        header ? (menu.style.top = `${header.offsetHeight}px`) : '';
    });
}

export function fixedHeader(header) {
    const main = document.querySelector('main');
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;
        if (scrollPos > header.offsetHeight + 30) {
            header.classList.add('sticky');
            main.style.marginTop = header.offsetHeight;
        } else {
            main.style.marginTop = null;
            header.classList.remove('sticky');
        }
    });
}

export const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    },
};

export function tabs(tabs, tabsButtons, tabsContents) {
    if (tabs) {
        tabs.addEventListener('click', (e) => {
            if (e.target.classList.contains('tabs__button')) {
                const tabsPath = e.target.dataset.tabsPath;
                tabsHandler(tabsPath);
            }
        });
    }

    const tabsHandler = (path) => {
        tabsButtons.forEach((button) => {
            button.classList.remove('tabs__button--active');
        });
        document.querySelector(`[data-tabs-path="${path}"]`).classList.add('tabs__button--active');

        tabsContents.forEach((content) => {
            content.classList.remove('tabs__content--active');
        });
        document
            .querySelector(`[data-tabs-target="${path}"]`)
            .classList.add('tabs__content--active');
    };
}

export function scrollTo(menuItems, scrollSections, burger, menu) {
    if (menuItems && scrollSections) {
        menuItems.forEach((button) => {
            scrollSections.forEach((section) => {
                button.addEventListener('click', () => {
                    burger.classList.remove('active');
                    menu.classList.remove('active');
                    document.body.classList.remove('lock');
                    if (button.dataset.scroll === section.dataset.scroll) {
                        const pos = section.offsetTop;
                        window.scrollTo({
                            top: pos - 160,
                            left: 0,
                            behavior: 'smooth',
                        });
                    }
                });
            });
        });
    }
}

export function sliders() {
    let sliders = document.querySelectorAll('.swiper');
    if (sliders) {
        for (let index = 0; index < sliders.length; index++) {
            let slider = sliders[index];
            if (!slider.classList.contains('swiper-bild')) {
                let slider_items = slider.children;
                if (slider_items) {
                    for (let index = 0; index < slider_items.length; index++) {
                        let el = slider_items[index];
                        el.classList.add('swiper-slide');
                    }
                }
                let slider_content = slider.innerHTML;
                let slider_wrapper = document.createElement('div');
                slider_wrapper.classList.add('swiper-wrapper');
                slider_wrapper.innerHTML = slider_content;
                slider.innerHTML = '';
                slider.appendChild(slider_wrapper);
                slider.classList.add('swiper-bild');

                if (slider.classList.contains('swiper_scroll')) {
                    let sliderScroll = document.createElement('div');
                    sliderScroll.classList.add('swiper-scrollbar');
                    slider.appendChild(sliderScroll);
                }
            }
            if (slider.classList.contains('gallery')) {
                // slider.data('lightGallery').destroy(true);
            }
        }
        sliders_bild_callback();
    }

    function sliders_bild_callback(params) {}

    let sliderScollItems = document.querySelectorAll('.swiper-scroll');
    if (sliderScollItems.length > 0) {
        for (let index = 0; index < sliderScollItems.length; index++) {
            const sliderScrollItem = sliderScollItems[index];
            const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
            const sliderScroll = new Swiper(sliderScrollItem, {
                observer: true,
                observeParents: true,
                direction: 'vertical',
                slidesPerView: 'auto',
                freeMode: true,
                scrollbar: {
                    el: sliderScrollBar,
                    draggable: true,
                    snapOnRelease: false,
                },
                mousewheel: {
                    releaseOnEdges: true,
                },
            });
            sliderScroll.scrollbar.updateSize();
        }
    }

    function sliders_bild_callback(params) {}
}
