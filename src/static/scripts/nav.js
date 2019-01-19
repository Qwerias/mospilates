'use strict';
(function () {
    let menu = $('.header__menu');
    let nav = $('.nav');
    menu.on('click', () => {
        nav.toggleClass('opened');
    });
})();