(function($) {
	'use strict';

	$(document).ready(function() {

		$('html').removeClass('no-js');

		// grids with masonry plugin
		$('.grid').masonry({
			columnWidth : '.grid__sizer',
			// gutter : '.gutter-sizer',
			itemSelector : '.grid__item',
			percentPosition : 'true',
			fitWidth: true,
			horizontalOrder: true
		});


		// portfolio-filter
		$('.portfolio__nav-item').click(function() {
			var filterValue = $(this).attr('data-category');
			$('.grid__item').hide();
			$(filterValue).show();

			$(this)
				.addClass("portfolio__nav-item--active")
				.siblings().removeClass("portfolio__nav-item--active");

			$('.grid').masonry('layout');
		});

		// slider by slick-slider for team section
		$('.team__slider').slick({ 
			slide: '.team__slide-wrapper',
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			arrows: false,
			cssEase: 'ease-out',
		});

		// slider by slick-slider for testimonials section
		$('.testimonials__slider').slick({ 
			slide: '.testimonials__slide-wrapper',
			dots: true,
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			cssEase: 'ease-out',
			autoplay: true,
			autoplaySpeed: 4000
		});

		// google-map
		$(document).ready(function() {
			var map;
			var mapContainer = $('#map')[0];
			var mapCenter = {lat: 49.0704525, lng: 33.405257};
			map = new google.maps.Map(mapContainer, {
				center: mapCenter,
				zoom: 17,
			});

			var marker = new google.maps.Marker({
				position: mapCenter,
				map: map,
				title: 'Hello, I am here.',
				icon: '/img/map-marker.png'
			});

			var infowindow = new google.maps.InfoWindow({
				content: 'Yabadabadu'
			});

			infowindow.open(map, marker);

			marker.addListener('click', function() {
				infowindow.open(map, marker);
			});
		});

	});
})($)
