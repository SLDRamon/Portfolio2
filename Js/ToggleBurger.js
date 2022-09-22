const toggleButton = document.querySelectorAll(".toggle-button")
const navbarLinks = document.querySelectorAll(".navbar-links")
var toggle= true


toggleButton.forEach(burger => {
  burger.addEventListener('click', () => {
    if (toggle) {
      navbarLinks.forEach(nav => {
        nav.className="navbar-links active" 
      })
      toggle = false
    }
    else {
      navbarLinks.forEach(nav => {
        nav.className="navbar-links"
      })
      toggle = true
    }
  })
});