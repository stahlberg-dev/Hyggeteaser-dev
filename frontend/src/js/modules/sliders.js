import Swiper, { Pagination, EffectFade, Autoplay} from 'swiper';

// ----- About slider ------------------------------------------------------------------------

export function swiperPageSlider() {
    
    if (document.querySelector('.page__slider')) {

        const aboutSlider = new Swiper('.page__slider', {
            modules: [Pagination, EffectFade, Autoplay],
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 0,
            watchOverflow: true,
            speed: 1000,
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