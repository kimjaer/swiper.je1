window.onload = function () {
  // onload는 딱 한번만..제이쿼리 ready는 여러번 해도 됨.
  const swiperMain = new Swiper('#mainBanner .swiper', {
    loop: true,
    effect: 'fade',
    pagination: {
      el: '#mainBanner .swiper-pagination',
      clickable: true
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


  document.querySelector(".toggle").addEventListener("click", function () {

    this.classList.toggle('stop');
    // this가 태그객체임이 확인되어 그대로 클래스를 주었다가 빼았다가 함

    togglestatu = this.classList.contains('stop');
    // 클래스명이 포함되어 있으면 true, 아니면 false

    if (togglestatu) {
      swiperMain.autoplay.stop();
      console.log("stop")
      // 반드시  swiper변수명을 var 로 수정할 껏
      // const 로 선언된 변수를 인식할 수가 없음 
      // 인식 범위가 넓은 var로 수정해야만 실행됨
      $('.toggle').removeClass('bi-play-fill')
      $('.toggle').addClass('bi-pause')
      console.log("STOP")

    } else {
      swiperMain.autoplay.start();
      console.log("play")

      $('.toggle').removeClass('bi-pause')
      $('.toggle').addClass('bi-play-fill')
      console.log("GO")
    }

  })
}
