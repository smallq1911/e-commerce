//define elements
const msgBlock = document.getElementById("msg")
const mobileNav = document.getElementById("mNav")
const searchForm = document.getElementById("searchForm")
const notiDropdown = document.getElementById("notification")
const cartSidebar = document.getElementById("cart")
const favModal = document.getElementById("favorite")
const defaultNav = document.getElementById("nav")
const collapseNav = document.getElementById("mCollapse")

//initialize msg swiper
const msgSwiper = new Swiper(".header__msg-block", {
    autoHeight: true,
    direction: "vertical",
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
})

//handle show elements
function ToggleShowHide(id, className) {
  document.getElementById(id).classList.toggle(className)
}
//close elements
function HideElement(id, className) {
  document.getElementById(id).classList.remove(className)
}

//window click handle
window.onclick = function(event) {
  //mobile navigation handle
  if(event.target.matches(".header-navigation-mobile-sidebar")){
    if(mobileNav.classList.contains("header-navigation-mobile-show")){
      mobileNav.classList.remove("header-navigation-mobile-show")
    }
  }
  //search form handle
  if (!event.target.matches('.search-btn')) {
    if(event.target.matches(".search-content") || event.target.matches(".search-input") || event.target.matches(".search-recommend")){
      return false
    }
    if (searchForm.classList.contains('search-show')) { 
      searchForm.classList.remove('search-show') 
    }
  }
  //notification dropdown handle
  if (!event.target.matches('.notification-btn')) {
    if (notiDropdown.classList.contains('notification-dropdown-show')) { 
      notiDropdown.classList.remove('notification-dropdown-show') 
    }
  }
  //cart sidebar handle
  if(event.target.matches(".cart-sidebar")){
    if(cartSidebar.classList.contains("cart-show")){
      cartSidebar.classList.remove("cart-show")
    }
  }
  //favorite modal handle
  if(event.target.matches(".favorite-modal")){
    if(favModal.classList.contains("favorite-show")){
      favModal.classList.remove("favorite-show")
    }
  }
}
//window scroll handle
function HideHeader() {
  //scroll < 40px back to default
  if(window.pageYOffset < 40){
    msgBlock.style.opacity = 1
    msgBlock.style.height = "30px"
    msgBlock.style.visibility = "visible"
    searchForm.style.marginTop = "0"
    notiDropdown.style.marginTop = "0"
    defaultNav.style.marginTop = "0"
    
  }
  //scroll down > 40px
  if(window.pageYOffset > 40){
    msgBlock.style.opacity = 0 
    msgBlock.style.height = 0 
    msgBlock.style.visibility = "hidden" 
    searchForm.style.marginTop = "-30px"
    notiDropdown.style.marginTop = "-30px" 
    defaultNav.style.marginTop = "-30px" 
  }
}