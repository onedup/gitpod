// import Swiper JS
import Swiper from "swiper/bundle";

const swiper = new Swiper(".testimonials__swiper", {
  slidesPerView: 3.5,
  spaceBetween: 24,

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
