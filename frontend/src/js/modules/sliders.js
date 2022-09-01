import Swiper, { Autoplay, Navigation, Pagination} from 'swiper';

// ----- About slider ------------------------------------------------------------------------

export function swiperPageSlider() {
    
    if (document.querySelector('.page__slider')) {

        const aboutSlider = new Swiper('.page__slider', {
            modules: [Navigation, Pagination],
            /* effect: 'fade',
            fadeEffect: {
                crossFade: true,
            }, */
            autoplay: {
                delay: 3000,
            },
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 0,
            watchOverflow: true,
            speed: 800,
            loop: true,
            preloadImages: false,
            pagination: {
                el: '.page__slider-pagination',
                type: 'bullets',
                clickable: true,
            },
            breakpoints: {
            
            }
        });

    }
}
//------------------------------------------------------------------------------------------- 