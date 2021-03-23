$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('burger');
        $('body').toggleClass('lock');
    });
    $('.header__link').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('burger');
    });

    function addSliderAPI(imgList) {
        imgList.forEach((itemImg) => {
            $(`.slider2`).append(
                `<div class="gallery__cel">
               <img class="gallery__img" src="${itemImg.webformatURL}" alt="Gallery2">
           </div>` )
        })
    }

    function imgAPI() {
        const link = `https://pixabay.com/api/?key=20777658-fd9f7557d2f4a166b87d8a0a7&q=iphone&image_type=photo&pretty=true&orientation=horizontal&per_page=15`;
        fetch(link)
            .then((response) => {
                let myresult = response.json()
                return myresult;
            })
            .then((result) => {
                addSliderAPI(result.hits);
                $(".slider2").slick({
                    lazyLoad: 'ondemand',
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                    swipeToSlide: true,
                    prevArrow: $('.prev'),
                    nextArrow: $('.next'),
                    lazyLoad: 'ondemand',
                    focusOnSelect: true,
                    infinite: true,
                    speed: 700,
                    waitForAnimate: false,
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    imgAPI();

    $(".slider1").on("afterChange", function (event, slick, currentSlide, nextSlide) {
        $(".slide__number").text(`0${currentSlide + 1}/0${slick.slideCount}`);
    });

    $(".slider1").slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        swipeToSlide: true,
        prevArrow: $('.prevBtn'),
        nextArrow: $('.nextBtn'),
        lazyLoad: 'ondemand',
        focusOnSelect: true,
        infinite: true,
        speed: 700,
        waitForAnimate: false,
    });

    $('#subscribeBtn').click(function (event) {
        $('#modal').toggleClass('activeModal');
    })

    $('#closeBtn').click(() => $('#modal').toggleClass('activeModal'));

    $('.modal').click(function (e) {
        if ($(e.target).is('.modal')) {
            $('#modal').toggleClass('activeModal');
        }
    });

});