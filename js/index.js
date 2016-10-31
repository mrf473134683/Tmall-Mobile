$(function () {
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay: 2000,
        pagination: '.swiper-pagination',
    })
    var mySwiper1 = new Swiper ('.banner-box', {
        direction: 'vertical',
        loop: true,
        autoplay: 2000,
    })
    var mySwiper2 = new Swiper ('.swiper-box', {
        direction: 'horizontal',
        slidesPerView:2,
        // freeMode:true,
    })

$(".header-menu").on("touchend",function () {
    $(".list-box").addClass("list-boxs")
    $("body").addClass("bodys")
    $(".list-inner").delay(1000).addClass("list-inners")
})
$(".clicks").on("touchend",function () {
    $(".list-inner").removeClass("list-inners").addClass("list-inners1").delay(1000).queue(function () {
      $(this).removeClass("list-inners1").dequeue()
    })
    $("body").removeClass("bodys")
    $(".list-box").delay(1000).queue(function () {
        $(this).removeClass("list-boxs").dequeue()
    })
})
    $(".list-lead").on("touchend","li",function(){
        $(".list-lead").find("li").removeClass("lis")
        $(this).addClass("lis")
    })
    $(window).on("scroll",function () {
        var scrolltop=document.body.scrollTop||document.documentElement.scrollTop;
        if(scrolltop>=300){
            $('.header').addClass("headers")
        }else{
            $('.header').removeClass("headers")

        }
    })
})