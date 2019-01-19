'use strict';

(function () {
	var form = $('#form');
	var thanks = $('.thanks');
	var overlay = $('.overlay');
	var submit = form.find('.form__button');
	var close = $('.modal__close');
	var buttons = $('.form-button');

	var form_sertificate = $('.form-sertificate');

	overlay.on('click', function () {
		overlay.addClass('hidden');
		if (!form.hasClass('hidden')) {
			form.addClass('hidden');
		}
		if (!thanks.hasClass('hidden')) {
			thanks.addClass('hidden');
		}
		if (form_sertificate && !form_sertificate.hasClass('hidden')) {
			form_sertificate.addClass('hidden');
		}
	});

	buttons.on('click', function () {
		form.removeClass('hidden');
		overlay.removeClass('hidden');
	});

	close.on('click', function () {
		if (!form.hasClass('hidden')) {
			form.addClass('hidden');
		}
		if (!thanks.hasClass('hidden')) {
			thanks.addClass('hidden');
		}
		if (form_sertificate && !form_sertificate.hasClass('hidden')) {
			form_sertificate.addClass('hidden');
		}
		overlay.addClass('hidden');
	});

	submit.on('click', function () {
		form.addClass('hidden');
		// if (form_sertificate) form_sertificate.addClass('hidden');
		thanks.removeClass('hidden');
	});

	$('.form-sertificate-button').on('click', function () {
		form_sertificate.removeClass('hidden');
		overlay.removeClass('hidden');
	});

	form_sertificate.find('.form-sertificate__button').on('click', function () {
		form_sertificate.addClass('hidden');
		thanks.removeClass('hidden');
	});
})();
'use strict';
(function () {
	var menu = $('.header__menu');
	var nav = $('.nav');
	menu.on('click', function () {
		nav.toggleClass('opened');
	});
})();
(function () {
	$('.gallery__slider').slick({
		dots: false,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		prevArrow: $('#arrow-gallery-left'),
		nextArrow: $('#arrow-gallery-right')
	});

	var trainers = $('.trainers');
	if (trainers.length) {
		var trainers_arrow = $('.trainers__arrow');
		$(window).on('load', function () {
			var padding = Number($('.trainers').css('padding-top').match(/\d+/)[0]);
			var title_height = $('.main-title').eq(0).height();
			var image_height = $('.trainers__item_img-wrapper').height() / 2;
			var arrow_height = Math.round(trainers_arrow.eq(0).height() / 2);
			var total = padding + title_height + image_height - arrow_height + 15;

			trainers_arrow.css({
				top: total + 'px',
				opacity: 1
			});
		});
	}

	$('.trainers__slider').slick({
		dots: false,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		prevArrow: $('#arrow-trainers-left'),
		nextArrow: $('#arrow-trainers-right')
	});

	$('.prices__table--big').slick({
		slidesToShow: 5,
		autoplay: false,
		dots: false,
		arrows: false,
		infinite: false,
		responsive: [{
			breakpoint: 950,
			settings: {
				slidesToShow: 3,
				dots: true
			}
		}, {
			breakpoint: 800,
			settings: {
				slidesToShow: 2,
				dots: true
			}
		}, {
			breakpoint: 420,
			settings: {
				slidesToShow: 1,
				dots: true
			}
		}]
	});

	$('.prices__table--small').slick({
		slidesToShow: 2,
		autoplay: false,
		dots: false,
		arrows: false,
		infinite: false,
		responsive: [{
			breakpoint: 650,
			settings: {
				slidesToShow: 1,
				dots: true
			}
		}]
	});

	$('.invitation').slick({
		autoplay: false,
		autoplaySpeed: 4000,
		pauseOnHover: false,
		dots: true,
		arrows: false
	});
})();