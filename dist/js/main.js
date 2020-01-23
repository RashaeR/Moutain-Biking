//Variables
const navLink = document.querySelectorAll(".nav-link");
const navUnderLine = document.querySelectorAll(".nav-underline");
const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: ".info-container"
})
  .setClassToggle(".info-element1", "fade-in-right")

  .addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: ".info-container"
})
  .setClassToggle(".info-element2", "fade-in-top")
  .addTo(controller);

const scene3 = new ScrollMagic.Scene({
  triggerElement: ".info-container"
})
  .setClassToggle(".info-element3", "fade-in-left")
  .addTo(controller);

const triggerHook = scene.triggerHook();

scene.triggerHook(0.86);
scene2.triggerHook(0.86);
scene3.triggerHook(0.86);
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
