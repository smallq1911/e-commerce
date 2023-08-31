//define elements
const shopHeader = document.getElementById("shopHeader")
const shopList = document.getElementById("shopList")
const productFilter = document.getElementById("productFilter")
const toggleFilterBtn = document.getElementById("toggleFilterBtn")


toggleFilterBtn.onclick = function() {
    productFilter.classList.toggle("shop-filter-hide")
    shopHeader.classList.toggle("shop-top__hide-filter")
    shopList.classList.toggle("shop-right__hide-filter")
}

function HandleFilterPosition() {
    if(window.pageYOffset>135){
      productFilter.style.position = "fixed";
      productFilter.style.marginTop = "85px";
      if(window.pageYOffset > 1250){
        productFilter.style.bottom = "650px";
      }else{
        productFilter.style.bottom = "0"
      }
    }
    if(window.pageYOffset<135){
      productFilter.style.position = "absolute";
      productFilter.style.marginTop = "220px";
    }
}

window.onscroll = function(){
    HideHeader()
    HandleFilterPosition()
}