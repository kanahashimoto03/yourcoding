/* faq アコーディオン*/
$(function () {
  $(".p-faq__item").click(function () {
    var $answer = $(this).find(".p-faq__answer");
    if ($answer.hasClass(".open")) {
      $answer.removeClass(".open");
      $answer.slideUp();
    } else {
      $answer.addClass(".open");
      $answer.slideDown();
    }
  });
});

/* works スワイプ*/
var mySwiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  direction: "horizontal",

  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    reverseDirection: false,
  },

  breakpoints: {
    767: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});
