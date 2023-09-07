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
window.onscroll = function() {
    HideHeader()
}