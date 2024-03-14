var swiper = new Swiper(".mySwiper",{
    slidesPerView: 1,
    centeredSlides:true,
    loop: true,
    spaceBetween: 30,
    grabCursor:true,
    navigation: {
            nextEl: '.Swiper-button-next',
            prevtEl: '.Swiper-button-prev',

    },
    brakpoints : {
        991: {
            slidesPerView:3
        }

    }


});
