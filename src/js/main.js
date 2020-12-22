'use strict';
// just paralax scroll 
const image = document.getElementsByClassName('parallax-img');
new simpleParallax(image);
// just circle advantage-item background on mousemove 
const advantageItems = document.getElementById('advantage-items');
const advantageItem = advantageItems.querySelectorAll('.header__advantage-item');
const circle = document.getElementById('circle');
const circleBg = document.getElementById('circle-bg');
advantageItems.addEventListener('mousemove', function(e) {
    let x = e.pageX - this.offsetLeft;
    let y = e.pageY - this.offsetTop;
    circle.style.left = x - 120 + "px";
    circle.style.top = y - 120 + "px";
});
for (let i = 0; i < advantageItem.length; i++) {
    advantageItem[i].addEventListener('touchend', event => {
        event.preventDefault();
    });
    advantageItem[i].addEventListener('mousemove', (e) => {
        let url = advantageItem[i].getAttribute('data-img');
        let x = -e.offsetX;
        let y = -e.offsetY;
        circle.style.transform = "scale(1)";
        circleBg.style.backgroundImage = "url('" + url + "')";
        circleBg.style.backgroundPositionX = x + "px";
        circleBg.style.backgroundPositionY = y + "px";
    });
    advantageItem[i].addEventListener('mouseleave', () => {
        circle.style.transform = "scale(0)";
    });
};
// just wow
new WOW().init();
//just swiper-slider for section about
$(document).ready(function() {
    // data-type="parallax" data-speed="-3"
    // var $window = $(window);
    // $('*[data-type="parallax"]').each(function(){
    //     var $bgobj = $(this);
    //     $(window).scroll(function() {

    //         var yPos = -($window.scrollTop() / $bgobj.data('speed'));
    //         var coords = '50% '+ yPos + 'px';
    //         $bgobj.css({ backgroundPosition: coords });
    //     });
    // });
    var aboutSlider = $('[data-slider="about"]'),
        aboutPagination = aboutSlider.find('[data-progress="status"]');

    var aboutSliderConfig = new Swiper(aboutSlider, {
        preloadImages: false,
        speed: 1000,
        parallax: true,
        centeredSlides: true,
        spaceBetween: 110,
        lazy: {
            loadPrevNext: true
        },
        slidesPerView: 2,
        grabCursor: true,
        watchSlidesVisibility: true,
        watchOverflow: true,
        preloadImages: false,
        watchSlidesProgress: true,
        iOSEdgeSwipeDetection: true,
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 50
            },
            992: {
                slidesPerView: 2
            }
        },
        pagination: {
            el: aboutPagination.find('[data-progress="list"]'),
            type: 'custom',
            clickable: true,
            renderCustom: function(swiper, current, total) {
                var currentIndex = swiper.activeIndex + 1,
                    totalElements = swiper.slides.length,
                    progress = currentIndex / totalElements * 100;

                aboutPagination.find('[data-progress="line"] span').
                css('width', progress + "%");
                aboutPagination.find('[data-progress="list"] span').
                removeClass('active').
                eq(swiper.activeIndex).addClass('active');
            }
        },
        on: {
            init: function(slider) {
                var slides = this.slides,
                    html = "";
                $(slides).each(function() {
                    var year = $(this).find('h5 span').text();
                    aboutPagination.find('[data-progress="list"]').append('<span class="swiper-pagination-bullet">' + year + '</span>');
                });
            }
        }
    });
});
// just check ios safari
var userAgent = window.navigator.userAgent;
var header = document.getElementById('header');
var quote = document.getElementById('quote');
if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
    header.style.backgroundAttachment = 'inherit';
    quote.style.backgroundAttachment = 'inherit';
}