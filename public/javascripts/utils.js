// Initialize Swiper
var swiper = new Swiper(".header__msg-block", {
  autoHeight: true,
  direction: "vertical",
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
});
var swiper = new Swiper(".recommend-list", {
  autoHeight:true,
  spaceBetween: 0,
  grabCursor: true,
  slidesPerView: 4
});

// Toggle show dropdown
function ShowToggle() {
    document.getElementById("toggle").classList.toggle("show")
}

function ShowFavorite() {
  document.getElementById("modal").classList.add("show")
}

function ShowSearch() {
  document.getElementById("searchForm").classList.toggle("search-show")
}
function ShowCart() {
  document.getElementById("cart").classList.toggle("cart-show")
}

window.onclick = function(event) {
  if (!event.target.matches('.notification-btn')) {
    let dropdown = document.getElementById("toggle");
    if (dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    }
  }
  if (!event.target.matches('.search-btn')) {
    let dropdown = document.getElementById("searchForm");
    if (dropdown.classList.contains('search-show')) {
      dropdown.classList.remove('search-show');
    }
  }
}

var favoriteModal = document.getElementById("modal")
favoriteModal.onclick = function() {
  favoriteModal.classList.remove("show")
}

var cartSidebar = document.getElementById("cart")
cartSidebar.onclick = function() {
  cartSidebar.classList.remove("cart-show")
}
window.onscroll = function() {
  
}



window.onscroll = function() {
  if(window.pageYOffset>40){
    document.getElementById("msg").style.opacity = 0;
    document.getElementById("msg").style.height = 0;
    document.getElementById("msg").style.visibility = "hidden";
    document.getElementById("searchForm").style.marginTop = "-30px";
    document.getElementById("toggle").style.marginTop = "-30px";
    document.getElementById("nav").style.marginTop = "-30px";
  }else{
    document.getElementById("msg").style.opacity = 1;
    document.getElementById("msg").style.height = "30px";
    document.getElementById("msg").style.visibility = "visible";
    document.getElementById("searchForm").style.marginTop = "0";
    document.getElementById("toggle").style.marginTop = "0";
    document.getElementById("nav").style.marginTop = "0";
  }
}

