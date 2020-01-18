//Variables
const navLink = document.querySelectorAll(".nav-link");
const navUnderLine = document.querySelectorAll(".nav-underline");

//Makes Nav unline's length
for (var i = 0; i < 4; i++) {
  const nav = document.getElementById("nav-" + String(i));
  const getNav = getComputedStyle(nav);
  nav.style.width = String(parseInt(getNav.width.split("px")) + 25) + "px";
}

underlineEffect(navLink);

//Nav underline and brightness effect
function underlineEffect(link) {
  for (var eachLink = 0; eachLink < link.length; eachLink++) {
    link[eachLink].addEventListener(
      "mouseover",
      function(eachLink) {
        link[eachLink].style.filter = "brightness(120%)";
        navUnderLine[eachLink].style.top = "0px";
        navUnderLine[eachLink].style.opacity = "100%";
      }.bind(this, eachLink)
    );

    link[eachLink].addEventListener(
      "mouseleave",
      function(eachLink) {
        link[eachLink].style.filter = "";
        navUnderLine[eachLink].style.top = "";
        navUnderLine[eachLink].style.opacity = "";
      }.bind(this, eachLink)
    );
  }
}
