/* バーガーボタン */
$(".burger__btn").on("click", function () {
  $(".bar").toggleClass("cross");
  $(".l-header__nav").toggleClass("open");
  $("body").toggleClass("noscroll");
});

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
      centeredSlides: true,
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});

/* フェードイン */

$(window).on("load", function () {
  $(".fv-fade").addClass("loadin");
});

$(window).on("scroll", function () {
  $(".fade").each(function () {
    let windowHeight = $(window).height();
    let scroll = $(window).scrollTop();
    let position = $(this).offset().top;
    if (scroll > position - windowHeight) {
      $(this).addClass("scrollin");
    }
  });
});

/* スムーススクロール */
$(function () {
  $("a[href^=#]").click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("body html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});
