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
