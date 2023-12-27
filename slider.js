$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    adaptiveHeight: true,
    prevArrow: '<i class="fa-solid fa-angles-left"></i>',
    nextArrow: '<i class="fa-solid fa-angles-right"></i>',
    appendArrows: $('.arrows'),
    fade: true
})