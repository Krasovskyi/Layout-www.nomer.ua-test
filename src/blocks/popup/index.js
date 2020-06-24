(function () {
    const popups = [...document.getElementsByClassName('popup')];

    popups.forEach(popup => {
        const popup__area = popup.querySelector('.popup__area');
        const popupCloseBtn = popup.querySelector('.popup__close-btn');

        const closePopup = () => popup.classList.toggle('popup_hidden')

        popup__area.onclick = closePopup;
        popupCloseBtn.onclick = closePopup;

        if (popup.classList.contains('popup-order')) {
            const popupOrderBtn = popup.querySelector('.popup__order-btn');
            const popupInputs = [...popup.querySelectorAll('input')]
            popupInputs.forEach(input => input.onclick = () => input.value = '')
            popupOrderBtn.onclick = e => {
                e.preventDefault()
                e.stopPropagation()
                closePopup()
            }
        }
    })




})();
