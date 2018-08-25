(function($) {
	'use strict';

	$(document).ready(function() {

		$('html').removeClass('no-js');

		// grids with isotope plugin
		var grid = $('.grid').isotope({
			itemSelector: '.grid__item',
			layoutMode: 'masonry',
			masonry: {
				horizontalOrder: true
			}
		});

		// portfolio-filter-isotop
		$('.portfolio__nav-item').click(function() {
			var filterValue = $( this ).attr('data-category');
        	grid.isotope({ filter: filterValue });

			$(this)
				.addClass("portfolio__nav-item--active")
				.siblings().removeClass("portfolio__nav-item--active");
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

			marker.addListener('click', function() {
				infowindow.open(map, marker);
			});
		});

	});
})($)
