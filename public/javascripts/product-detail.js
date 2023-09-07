const imgProductSwiper = new Swiper(".product-detail-img-slider", {
    autoHeight:true,
    direction: "vertical",
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
})
const recommendSwiper = new Swiper(".recommend-list", {
  autoHeight:true,
  spaceBetween: 0,
  grabCursor: true,
  slidesPerView: 2,
  breakpoints: {
      1000: {
       slidesPerView: 4
      }
  }
})

window.onscroll = function(){
  HideHeader()
}