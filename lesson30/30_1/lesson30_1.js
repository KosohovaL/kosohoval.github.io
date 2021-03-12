$(".header-item").eq(0).addClass("active");
$(".header-svg").eq(0).addClass("active");
$("#tab" + "0").addClass("active");
$(".header-item").click(function () {
    $(".header-item").removeClass("active").eq($(this).index()).addClass("active");
    $(".card-body").removeClass("active");
    $("#tab" + $(this).index()).addClass("active");
});


