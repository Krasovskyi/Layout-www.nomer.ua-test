/*switching between li elements*/
(function () {
    const CLASS_NAME = 'menu__link_active'
    let curActive = $('.menu__link_active')[0]
    $('.menu__link').click(e => {
        e.preventDefault()
        e.stopPropagation()
        curActive.classList.toggle(CLASS_NAME)
        e.target.classList.toggle(CLASS_NAME)
        curActive = e.target
    })
})();
/**************/

(function () {
    const intro = document.querySelector('.intro')
    const popup = intro.querySelector('.popup-order')
    const headerBtn = document.querySelector('.header__btn')
    const popupCongratulations = intro.querySelector('.popup-congratulations')
    const popupOrderBtn = popup.querySelector('.popup__order-btn')

    const togglePopupVisibility = popup => () => popup.classList.toggle('popup_hidden')
    headerBtn.onclick = togglePopupVisibility(popup)

})();

 /*Computed margin left-right and set to intro__body and intro__form*/
(function () {
    const container = document.querySelector('.container')
    const introContainer = document.querySelector('.intro__container')
    const introForm= document.querySelector('.intro__form form')
    const getCurMargin = () => {
        const containerStyle = window.getComputedStyle(container);

        introContainer.style.marginLeft = containerStyle.marginLeft
        introForm.style.marginRight = containerStyle.marginRight
    }

    window.onresize = getCurMargin
    window.onload = getCurMargin
})()

import $ from 'jquery'

$('.menu__item a').click(function (e) {
    if (!$(this).attr('href') || $(this).attr('href') === '#') return
    e.preventDefault()
    e.stopPropagation()
    $("html, body").animate(
        { scrollTop: $($(this).attr("href")).offset().top }, 500);
    $('.intro__nav, #menu, .intro__container, .intro__burger').toggleClass('active')

})

$('.intro__burger').click(function (e) {
    e.stopPropagation()
    $('.intro__nav, #menu, .intro__container, .intro__burger').toggleClass('active')

});
/*SEND FORM DATA*/
import emailRequestHandler from '../../services/http-requsets'
(function () {
    $('.intro-order-btn').click(async e => {
        e.preventDefault();
        e.stopPropagation();
        const formInputsData = $('.intro__form form').serialize()
        console.log(formInputsData)
        const res = await emailRequestHandler(formInputsData)
        if (res) {
            $('.intro .popup-congratulations').toggleClass('popup_hidden')
            $('.intro__form input').val('')
        } else {
            return alert('Network response was not ok')
        }
    })
    $('.intro .popup__order-btn').click(async e => {
        e.preventDefault();
        e.stopPropagation();
        const formInputsData = $('.intro .popup__form form').serialize()
        const res = await emailRequestHandler(formInputsData)
        if (res) {
            $('.intro .popup-congratulations').toggleClass('popup_hidden')
            $('.intro .popup__form input').val('')
        } else {
            return alert('Network response was not ok')
        }
    })

})();
