/* var hero__swiper = new Swiper(".hero__swiper", {
	spaceBetween: 100,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	loop: true,
}); */


/* var content__tabs = new Swiper(".content__tabs", {
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
}); */




$(document).ready(function() { 
	$(window).load(function() { 
		
		function getData1(social) {
			$.ajax({
				type: "POST",
				url: "/get_photos/",
				data: { social: social },
				success: function (data) {
					
					arr = ['images/1.png', 'images/1.png', 'images/1.png'];

					var parse = JSON.parse(data);
					arr = parse;

					var hero_swiper_wrapper = document.createElement('div');
					$(".hero__swiper").append(hero_swiper_wrapper)
					$('.hero__swiper >div').attr("class", "swiper-wrapper");

					$.each(arr, function(i, arr) {
						$(".hero__swiper .swiper-wrapper").append("<div class='swiper-slide'><img style='width: 100%;' src='"+arr+"'></div>");
					})
				},
				error: function () {
					alert('Ошибка запроса вопросов');
				}
			});
			var hero__swiper = new Swiper(".hero__swiper", {
				autoplay: {
					delay: 5000,
					disableOnInteraction: false,
				},
				loop: true,
			});

		}
		getData1();



		function getData2(social) {
			$.ajax({
				type: "POST",
				url: "/get_articles/",
				data: { social: social },
				success: function (data) {
					
										arr = ['Спорт', 'музыка', 'Кино', 'Бизнес', 'Искусство', 'Юмор', 'Лидеры мнений'];

					var parse = JSON.parse(data);
					arr = parse;

					var content_body_wrapper = document.createElement('div');
					$(".content__body-wrapper").append(content_body_wrapper)
					$('.content__body-wrapper >div').attr("class", "swiper-wrapper");

					$.each(arr, function(i, arr) {
						$(".content__body-wrapper .swiper-wrapper").append(
							`
							<div class="swiper-slide">
								<div class="content__body"> 
									<div class="content__item item-content content__item--first">
									<div class="item-content__container"> 
										<div class="item-content__title">Истории ярких спортсменов и тренеров России</div>
										<div class="item-content__title-big title-big"> <span>${arr}</span></div>
										<div class="item-content__row"> 
											<div class="item-content__body item-content__body-desktop"> 
											<p class="item-content__text">Спорт — это эмоции. Боль поражений, радость побед. Но еще спорт — это постоянная работа над собой. Преодоление обстоятельств, соперников, судей, своих барьеров. Как жить, влюбляться, воспитывать детей и при этом быть максимально сконцентрированным на результате — рассказывают наши спортивные герои.</p>
											</div>
											<div class="item-content__image"> </div>
										</div>
										<div class="item-content__body item-content__body-mobile"> 
											<p class="item-content__text">Спорт — это эмоции. Боль поражений, радость побед. Но еще спорт — это постоянная работа над собой. Преодоление обстоятельств, соперников, судей, своих барьеров. Как жить, влюбляться, воспитывать детей и при этом быть максимально сконцентрированным на результате — рассказывают наши спортивные герои.</p>
										</div>
									</div>
									</div>
									<div class="content__item item-content"> 
									<div class="item-content__container"> 
										<div class="item-content__row"> 
											<div class="item-content__body"> 
											<div class="item-content__name">Роман Курцын</div>
											<p class="item-content__text">Когда-то я решил, что пробиться в волшебный мир кино мне поможет отличная физическая форма. И… получилось!</p><a class="item-content__read-btn" href="">
												ЧИТАТЬ ИСТОРИЮ</a>
											<div class="item-content__like"> <img src="images/like.svg" alt="alt"><span>505</span></div>
											</div>
											<div class="item-content__image"> <img src="images/2.png" alt="alt"></div>
										</div>
									</div>
									</div>
									<div class="content__item item-content">
									<div class="item-content__container"> 
										<div class="item-content__row"> 
											<div class="item-content__body"> 
											<div class="item-content__name">Роман Курцын</div>
											<p class="item-content__text">Когда-то я решил, что пробиться в волшебный мир кино мне поможет отличная физическая форма. И… получилось!</p><a class="item-content__read-btn" href="">
												ЧИТАТЬ ИСТОРИЮ</a>
											<div class="item-content__like"> <img src="images/like.svg" alt="alt"><span>505</span></div>
											</div>
											<div class="item-content__image"> <img src="images/2.png" alt="alt"></div>
										</div>
									</div>
									</div>
								</div>
							</div>
							`
						);
					})
				},
				error: function () {
					alert('Ошибка запроса вопросов');
				}
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
		}
		getData2();
	});
});

