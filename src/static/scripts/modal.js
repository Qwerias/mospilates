'use strict';
(function () {
	let form = $('#form');
	let thanks = $('.thanks');
	let overlay = $('.overlay');
	let submit = form.find('.form__button');
	let close = $('.modal__close');
	let buttons = $('.form-button');

	let form_sertificate = $('.form-sertificate');

	overlay.on('click', () => {
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

	buttons.on('click', () => {
		form.removeClass('hidden');
		overlay.removeClass('hidden');
	});

	close.on('click', () => {
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

	submit.on('click', () => {
		form.addClass('hidden');
		// if (form_sertificate) form_sertificate.addClass('hidden');
		thanks.removeClass('hidden');
	});

	$('.form-sertificate-button').on('click', () => {
		form_sertificate.removeClass('hidden');
		overlay.removeClass('hidden');
	});

	form_sertificate.find('.form-sertificate__button').on('click', () => {
		form_sertificate.addClass('hidden');
		thanks.removeClass('hidden');
	});

})();