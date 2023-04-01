import { setTheme } from "./experiencia.js";

window.addEventListener("load", function () {
  setTheme();

  const toggle = document.getElementById("toggleSwitch");
  if (toggle) {
    toggle.checked = localStorage.getItem("theme") === "boreal";
    toggle.addEventListener("change", () => {
      let targetTheme;
      if (toggle.checked) {
        targetTheme = "boreal";
      } else {
        targetTheme = "verao";
      }
      document.documentElement.setAttribute("data-theme", targetTheme);
      localStorage.setItem("theme", targetTheme);
    });
  }
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
      changeTheme.checked = true;
    } else {
      targetTheme = "verao";
      changeTheme.checked = false;
    }

    document.documentElement.setAttribute("data-theme", targetTheme);
    localStorage.setItem("theme", targetTheme);
  });
}

if (changeThemeMobile) {
  changeThemeMobile.addEventListener("click", () => {
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
