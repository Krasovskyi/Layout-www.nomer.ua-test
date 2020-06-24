import './index.scss'
import './blocks/footer/ukraine.svg'
import './blocks/intro/index'
import './blocks/popup/index'
import './blocks/footer/index'
import './blocks/main/worth/index'
import Swiper from 'swiper';

const mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 80,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});



