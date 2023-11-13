window.onload = function () {
  // onload는 딱 한번만..제이쿼리 ready는 여러번 해도 됨.
  const swiperMain = new Swiper('#mainBanner .swiper', {
    loop: true,
    effect : 'fade',
    pagination: {
      el: '#mainBanner .swiper-pagination',
    },
    navigation: {
      nextEl: '#mainBanner .swiper-button-next',
      prevEl: '#mainBanner .swiper-button-prev',
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    }
  });
}
