//Variables
const navLink = document.querySelectorAll(".nav-link");

//Makes Nav unline's length
for (var i = 0; i < 4; i++) {
  const nav = document.getElementById("nav-" + String(i));
  const getNav = getComputedStyle(nav);
  nav.style.width = String(parseInt(getNav.width.split("px")) + 25) + "px";
}

underlineEffect(navLink);
function underlineEffect(link) {
  for (const eachLink of link) {
    eachLink.addEventListener("mouseover", function() {
      eachLink.style.filter = "brightness(120%)";
    });

    eachLink.addEventListener("mouseleave", function() {
      eachLink.style.filter = "";
    });
  }
}
