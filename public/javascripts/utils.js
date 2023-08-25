// Initialize Swiper
var swiper = new Swiper(".header__msg-block", {
  autoHeight: true,
  direction: "vertical",
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
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