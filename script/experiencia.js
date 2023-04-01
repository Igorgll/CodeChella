import changeNavButton from "./index.js";

window.addEventListener("load", function () {
  setTheme();
});

const paginaAtiva = document.getElementById("pagina_ativa");
if (paginaAtiva) {
  paginaAtiva.style.textDecoration = "underline";
}

const changeNavButtonExperiencia = document.querySelector(".btn_nav");
changeNavButtonExperiencia.onclick = () => {
  changeNavButton();
};

const toggle = document.getElementById("toggleSwitchExperiencia");
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
  "changeThemeMobileExperiencia"
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

export function setTheme() {
  let savedTheme = localStorage.getItem("theme");
  if (!savedTheme) {
    savedTheme = "verao";
    localStorage.setItem("theme", savedTheme);
  }
  document.documentElement.setAttribute("data-theme", savedTheme);
}
