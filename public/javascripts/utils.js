var swiper = new Swiper(".product-detail-img-slider", {
  autoHeight:true,
  direction: "vertical",
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

