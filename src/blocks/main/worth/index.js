import emailRequestHandler from '../../../services/http-requsets'

(function () {
    const worth = document.querySelector('.worth')
    const popup = worth.querySelector('.popup-order')
    const worthOrderBtns = [...document.getElementsByClassName('worth-order-btn')]

    const popupCongratulations = worth.querySelector('.popup-congratulations')
    const popupOrderBtn = popup.querySelector('.popup__order-btn')

    const togglePopupVisibility = popup => () => popup.classList.toggle('popup_hidden')

    worthOrderBtns.forEach(btn => btn.onclick = togglePopupVisibility(popup))
})();

import $ from 'jquery'

(function () {
    $('.worth .popup__order-btn').click(async e => {
        e.preventDefault();
        e.stopPropagation();
        const formInputsData = $('.worth .popup__form form').serialize()
        const res = await emailRequestHandler(formInputsData)
        if (res) {
            $('.worth .popup-congratulations').toggleClass('popup_hidden')
            $('.worth .popup__form input').val('')
        } else {
            return alert('Network response was not ok')
        }
    })

})();
