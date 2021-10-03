let navButton = document.getElementById("navButton");
let navMenu = document.getElementById("navMenu");
let navList = document.getElementById("navList");

navButton.onclick = function() {
  if (navMenu.classList.contains("active")) {
    navMenu.classList.remove("active");
    navMenu.classList.add("inactive");
    navList.style.display = "none";
  } else {
    navMenu.classList.remove("inactive");
    navMenu.classList.add("active");
    navList.style.display = "flex";
  }
};