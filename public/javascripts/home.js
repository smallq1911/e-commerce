function HandleSizeSwiper() {
    if(window.innerWidth > 1000){
        //default
        const recommendSwiper = new Swiper(".recommend-list", {
            autoHeight:true,
            spaceBetween: 0,
            grabCursor: true,
            slidesPerView: 4
        })
    }else{
        //moblie responsive
        const recommendSwiper = new Swiper(".recommend-list", {
            autoHeight:true,
            spaceBetween: 0,
            grabCursor: true,
            slidesPerView: 2
        })
    }
}

window.onresize = function() {
    HandleSizeSwiper()
}

window.onscroll = function() {
    HideHeader()
}