var heroSlider, contentTabs, contentInfo;

$(document).ready(function() {
    $.getJSON('/get_photos/', function(data) {
        try {
            JSON.parse(JSON.stringify(data));


            let html = data.map(function(img) {
                return "<div class='swiper-slide'><img class='hero__image' src='" + img + "'></div>";
            }).join('');

            $(".hero__swiper .swiper-wrapper").html(html);

            heroSlider = new Swiper(".hero__swiper", {
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                loop: true,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
            });
        } catch (e) {
            console.error('Полученные данные не являются валидным JSON');
        }
    });

    $.getJSON('/get_articles/', function(data) {
        try {
            JSON.parse(JSON.stringify(data));

            let htmlTabTemplate = '<div class="swiper-slide"><div class="content__tab"><span>%name%</span></div></div>';

            let htmlHeroTemplate = '<div class="content__item item-content"> \
                                <div class="item-content__container"> \
                                <div class="item-content__row"> \
                                <div class="item-content__body"> \
                                <div class="item-content__name">%title%</div> \
                                <p class="item-content__text">%text%</p><a class="item-content__read-btn" href="%link%" target="_blank"> \
                                ЧИТАТЬ ИСТОРИЮ</a> \
                                <div class="item-content__like" data-id="%id%"> <img src="images/like.svg" alt="alt"><span>%likes%</span></div> \
                                </div> \
                                <div class="item-content__image"> <img src="%image%" alt="alt"></div> \
                                </div> \
                                </div> \
                                </div>';

            let htmlTemplate = '<div class="swiper-slide">\
                                <div class="content__body"> \
                                <div class="content__item item-content content__item--first">\
                                <div class="item-content__container"> \
                                <div class="item-content__title">%desc%</div>\
                                <div class="item-content__title-big title-big"> <span>%name%</span></div>\
                                <div class="item-content__row"> \
                                <div class="item-content__body item-content__body-desktop"> \
                                <p class="item-content__text">%text%</p>\
                                </div>\
                                <div class="item-content__image" style="background-image: url(%image%);"></div>\
                                </div>\
                                <div class="item-content__body item-content__body-mobile"> \
                                <p class="item-content__text">%text%</p>\
                                </div>\
                                </div>\
                                </div>\
                                %hero%\
                                </div>';

            $.each(data, function(key, value) {
                let heroes = value.heroes;
                let herosHtml = '';
                $.each(heroes, function(index, hero) {
                    let heroHtml = htmlHeroTemplate;
                    heroHtml = heroHtml.replace('%title%', hero.title);
                    heroHtml = heroHtml.replace('%text%', hero.text);
                    heroHtml = heroHtml.replace('%image%', hero.image);
                    heroHtml = heroHtml.replace('%link%', hero.link);
                    heroHtml = heroHtml.replace('%likes%', hero.likes);
                    heroHtml = heroHtml.replace('%id%', hero.id);
                    herosHtml += heroHtml;
                });

                let html = htmlTemplate;
                html = html.replace('%name%', value.name);
                html = html.replace('%desc%', value.desc);
                html = html.replace(/%text%/g, value.text);
                html = html.replace('%image%', value.image);
                html = html.replace('%hero%', herosHtml);

                let htmlTab = htmlTabTemplate;
                htmlTab = htmlTab.replace('%name%', value.name);

                $(".content__tabs .swiper-wrapper").append(htmlTab);
                $(".content__body-wrapper .swiper-wrapper").append(html);
            });


            contentTabs = new Swiper(".content__tabs", {
                spaceBetween: 10,
                slidesPerView: 'auto',
                freeMode: true,
                watchSlidesProgress: true,
                allowTouchMove: false,
            });
            contentInfo = new Swiper(".content__body-wrapper", {
                allowTouchMove: false,
                spaceBetween: 10,
                thumbs: {
                    swiper: contentTabs,
                },
            });

        } catch (e) {
            console.error('Полученные данные не являются валидным JSON');
        }
    });

    $(document).on('click','.item-content__like',function (){
        event.preventDefault();
        let elem = $(this)
        if (!elem.hasClass('clicked')){
            elem.addClass('clicked');
            let id = $(this).data('id');
            $.ajax({
                type: "POST",
                url: "/add_like/",
                data: { id : id },
                success: function(data) {
                    if (data.length > 0) {
                        elem.find('span').text(parseInt(data));
                    } else {
                        console.log("Пустой like");
                    }
                },
                error: function () {
                    console.log('Ошибка like');
                }
            });
        }
    });
});

