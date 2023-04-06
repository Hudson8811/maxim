var hero__swiper = new Swiper(".hero__swiper", {
	spaceBetween: 100,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	loop: true,
});


var content__tabs = new Swiper(".content__tabs", {
	spaceBetween: 10,
	slidesPerView: 'auto',
	freeMode: true,
	watchSlidesProgress: true,
	allowTouchMove: false,
});
var content__body_wrapper = new Swiper(".content__body-wrapper", {
	allowTouchMove: false,
	spaceBetween: 10,
	navigation: {
	nextEl: ".swiper-button-next",
	prevEl: ".swiper-button-prev",
	},
	thumbs: {
	swiper: content__tabs,
	},
});





$(document).ready(function() { 
	$(window).load(function() { 


	});
});