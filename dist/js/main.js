//Makes Nav unline
for (var i = 0; i < 4; i++) {
  var nav = document.getElementById("nav-" + String(i));
  const getNav = getComputedStyle(nav);
  nav.style.width = String(parseInt(getNav.width.split("px")) + 25) + "px";
}
