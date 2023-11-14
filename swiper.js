// window.onload = function () {
//   // onload는 딱 한번만..제이쿼리 ready는 여러번 해도 됨.
//   const swiperMain = new Swiper('#mainBanner .swiper', {
//     loop: true,
//     effect: 'fade',
//     pagination: {
//       el: '#mainBanner .swiper-pagination',
//       clickable: true
//     },
//     navigation: {
//       nextEl: '#mainBanner .swiper-button-next',
//       prevEl: '#mainBanner .swiper-button-prev',
//     },
//     autoplay: {
//       delay: 4000,
//       disableOnInteraction: false,
//       pauseOnMouseEnter: true
//     }
//   });


//   document.querySelector(".toggle").addEventListener("click", function () {

//     this.classList.toggle('stop');
//     // this가 태그객체임이 확인되어 그대로 클래스를 주었다가 빼았다가 함

//     togglestatu = this.classList.contains('stop');
//     // 클래스명이 포함되어 있으면 true, 아니면 false

//     if (togglestatu) {
//       swiperMain.autoplay.stop();
//       console.log("stop")
//       // 반드시  swiper변수명을 var 로 수정할 껏
//       // const 로 선언된 변수를 인식할 수가 없음 
//       // 인식 범위가 넓은 var로 수정해야만 실행됨
//       $('.toggle').removeClass('bi-play-fill')
//       $('.toggle').addClass('bi-pause')
//       console.log("STOP")

//     } else {
//       swiperMain.autoplay.start();
//       console.log("play")

//       $('.toggle').removeClass('bi-pause')
//       $('.toggle').addClass('bi-play-fill')
//       console.log("GO")
//     }

//   })
// }


$(document).ready(function () {

  // 외부연동이고, 태그가 나오기도 전에 연결된 자바스크립트라서
  // onload 이벤트에 실행식을 넣어두어야 한다.
  // 딱 한번만...  제이쿼리 ready는 여러번해도됨
  const swiperMain = new Swiper('#mainBanner .swiper', {
    loop: true,
    effect: 'fade',
    pagination: {
      el: '#mainBanner .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '#mainBanner .swiper-button-next',
      prevEl: '#mainBanner .swiper-button-prev',
    },
    observer: true,   // 추가
    observeParents: true,   // 추가
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    on: {
      realIndexChange: function () { // realindex (활성화번호) 바뀔때마다 찾던 이벤트이름은 이것이다.
        console.log("realIndexChange", this.realIndex);
        document.body.classList = "realIndex" + this.realIndex;
      }
    }
  });
  var toggle = true;

  $(".toggle").click(function () {
    $(this).toggleClass("on");

    if (toggle) {
      swiperMain.autoplay.stop(); // 무조건 첫번째 클릭
      toggle = false; // 다음 클릭시 else 실행하게 하도록 설계
    } else { 
      swiperMain.autoplay.start();
      toggle = true; // 다음 클릭시 if 실행하도록 처리
    }


  })

})


