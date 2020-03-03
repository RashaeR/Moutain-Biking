// Variables \\
const navLink = document.querySelectorAll(".nav-link");
const navUnderLine = document.querySelectorAll(".nav-underline");
const controller = new ScrollMagic.Controller();

// Adding Scrolling Events \\

//info trigger events
const info = new ScrollMagic.Scene({
  triggerElement: ".info-container"
})
  .setClassToggle(".info-element1", "fade-in-right")

  .addTo(controller);

const info2 = new ScrollMagic.Scene({
  triggerElement: ".info-container"
})
  .setClassToggle(".info-element2", "fade-in-top")
  .addTo(controller);

const info3 = new ScrollMagic.Scene({
  triggerElement: ".info-container"
})
  .setClassToggle(".info-element3", "fade-in-left")
  .addTo(controller);

info.triggerHook(0.86);
info2.triggerHook(0.86);
info3.triggerHook(0.86);

//tracks trigger event
const track1 = new ScrollMagic.Scene({
  triggerElement: ".track1"
})
  .setClassToggle(".track1", "fade-in-right")
  .addTo(controller);

const track2 = new ScrollMagic.Scene({
  triggerElement: ".track2"
})
  .setClassToggle(".track2", "fade-in-left")
  .addTo(controller);

const track3 = new ScrollMagic.Scene({
  triggerElement: ".track3"
})
  .setClassToggle(".track3", "fade-in-right")
  .addTo(controller);

track1.triggerHook(0.95);
track2.triggerHook(0.95);
track3.triggerHook(0.95);

//news trigger event
const news1 = new ScrollMagic.Scene({
  triggerElement: ".news1"
})
  .setClassToggle(".news1", "fade-in-right")
  .addTo(controller);

const news2 = new ScrollMagic.Scene({
  triggerElement: ".news2"
})
  .setClassToggle(".news2", "fade-in-bottom")
  .addTo(controller);

const news3 = new ScrollMagic.Scene({
  triggerElement: ".news3"
})
  .setClassToggle(".news3", "fade-in-left")
  .addTo(controller);

news1.triggerHook(0.8);
news2.triggerHook(0.8);
news3.triggerHook(0.8);

//blog trigger event
const blog1 = new ScrollMagic.Scene({
  triggerElement: ".blog1"
})
  .setClassToggle(".blog1", "fade-in-right")
  .addTo(controller);

const blog2 = new ScrollMagic.Scene({
  triggerElement: ".blog2"
})
  .setClassToggle(".blog2", "fade-in-left")
  .addTo(controller);

const blog3 = new ScrollMagic.Scene({
  triggerElement: ".blog3"
})
  .setClassToggle(".blog3", "fade-in-right")
  .addTo(controller);

blog1.triggerHook(0.8);
blog2.triggerHook(0.8);
blog3.triggerHook(0.8);

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
