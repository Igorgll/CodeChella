import { setTheme } from "./experiencia.js";

window.addEventListener("load", function() {
  setTheme();
})

export default function changeNavButton() {
  const button = document.querySelector(".btn_nav");
  const nav_items = document.querySelector(".nav_items_mobile");

  button.classList.toggle("active");
  nav_items.classList.toggle("active");
}

const btnMobile = document.querySelector(".btn_nav");
btnMobile.onclick = () => {
  changeNavButton();
};

const changeTheme = document.querySelector("#toggleSwitch");
const changeThemeMobile = document.getElementById("changeThemeMobile");
if (changeTheme) {
  changeTheme.addEventListener("click", () => {
    let targetTheme;
    let currentTheme = document.documentElement.getAttribute("data-theme");
    if (currentTheme === "verao") {
      targetTheme = "boreal";
    } else {
      targetTheme = "verao";
    }
    document.documentElement.setAttribute("data-theme", targetTheme);
    localStorage.setItem("theme", targetTheme);
  });
}
