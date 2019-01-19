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


	let trainers = $('.trainers');
	if (trainers.length) {
		let trainers_arrow = $('.trainers__arrow');
		$(window).on('load', () => {
			let padding = Number($('.trainers').css('padding-top').match(/\d+/)[0]);
			let title_height = $('.main-title').eq(0).height();
			let image_height = $('.trainers__item_img-wrapper').height() / 2;
			let arrow_height = Math.round(trainers_arrow.eq(0).height() / 2);
			let total = padding + title_height + image_height - arrow_height + 15;

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
		responsive: [
			{
				breakpoint: 950,
				settings: {
					slidesToShow: 3,
					dots: true
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
					dots: true
				}
			},
			{
				breakpoint: 420,
				settings: {
					slidesToShow: 1,
					dots: true
				}
			}
		]
	});

	$('.prices__table--small').slick({
		slidesToShow: 2,
		autoplay: false,
		dots: false,
		arrows: false,
		infinite: false,
		responsive: [
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 1,
					dots: true
				}
			}
		]
	});

	$('.invitation').slick({
		autoplay: false,
		autoplaySpeed: 4000,
		pauseOnHover: false,
		dots: true,
		arrows: false
	})
})();