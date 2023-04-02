import changeNavButton from "./index.js";
import { setTheme } from "./experiencia.js";

window.addEventListener("load", function () {
  setTheme();
  ScrollReveal().reveal(".banner_setores h1", { delay: 200 });
  ScrollReveal().reveal(".mapa_img", { delay: 300 });
  ScrollReveal().reveal(".legenda", { delay: 450 });
  ScrollReveal().reveal(".detalhes h3", { delay: 300 });
  ScrollReveal().reveal(".pista", { delay: 400 });
  ScrollReveal().reveal(".premium", { delay: 600 });
  ScrollReveal().reveal(".cadeiras", { delay: 800 });
  ScrollReveal().reveal(".socials", { delay: 150 });
  ScrollReveal().reveal(".desenvolvido", { delay: 150 });
});

const paginaAtiva = document.getElementById("pagina_ativa");
paginaAtiva.style.textDecoration = "underline";

const changeNavButtonSetores = document.querySelector(".btn_nav");
changeNavButtonSetores.onclick = () => {
  changeNavButton();
};

const toggle = document.getElementById("toggleSwitchSetores");
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

const changeThemeMobile = document.getElementById(
  "changeThemeMobileSetores"
);
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
