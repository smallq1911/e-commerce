function showToggle() {
    document.getElementById("toggle").classList.toggle("show")
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.toggle-btn')) {
      var element = document.getElementById("toggle")
        if (element.classList.contains("show")) {
          element.classList.remove("show")
        }
      }
    }
  