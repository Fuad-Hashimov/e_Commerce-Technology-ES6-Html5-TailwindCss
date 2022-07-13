const nav = document.getElementsByClassName("navigation")[0];
const menu = document.getElementById("toggleMenu");
menu.addEventListener("click", (_) => {
  nav.classList.toggle("activeMenu");
});
