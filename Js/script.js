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
})

/*Progress-bars (Not Working*/
$(".oval span").each(function () {
  $(this).animate(
    {
      width: $(this).attr("data-progress") + "%",
    },
    1000
  );
  $(this).text($(this).attr("data-progress") + "%");
});