import $ from 'jquery'

(function () {
    const footerHomeBtn = document.querySelector('.footer__home-btn')
    footerHomeBtn.onclick = e => {
        e.preventDefault()
        e.stopPropagation()
        scrollTopAnimated()
    }

    function scrollTopAnimated() {
        $("html, body").animate(
            {scrollTop: "0"}, 600);
    }
})();


