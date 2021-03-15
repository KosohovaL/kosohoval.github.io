$(document).ready(function () {
    $(".slider").slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '40px',
        swipeToSlide: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        lazyLoad: 'ondemand',
        focusOnSelect: true,
        infinite: true,
        speed: 700,
    });
})



