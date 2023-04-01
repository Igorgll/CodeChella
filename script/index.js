import { setTheme } from "./experiencia.js";

window.addEventListener("load", function () {
  setTheme();
});

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

const changeThemeMobile = document.getElementById("changeThemeMobile");
const changeTheme = document.querySelector("#toggleSwitch");

if (changeTheme) {
  changeTheme.addEventListener("change", () => {
    let targetTheme;
    let currentTheme = document.documentElement.getAttribute("data-theme");

    if (currentTheme === "verao") {
      targetTheme = "boreal";
      changeThemeMobile.checked = true;
    } else {
      targetTheme = "verao";
      changeThemeMobile.checked = false;
    }

    document.documentElement.setAttribute("data-theme", targetTheme);
    localStorage.setItem("theme", targetTheme);
  });
}
