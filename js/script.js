//Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

//Ketika menu-resto di Klik
document.querySelector("#menu-resto").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik diluar Sidebar untuk menutup Nav
const resto = document.querySelector("#menu-resto");
document.addEventListener("click", function (e) {
  if (!resto.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
