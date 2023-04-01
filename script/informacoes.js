import changeNavButton from "./index.js";
import { setTheme } from "./experiencia.js";

const first_content = document.querySelector(".conteudo_first");
window.addEventListener("load", function () {
  setTheme();
  first_content.classList.add("active");
});

const paginaAtiva = document.getElementById("pagina_ativa");
paginaAtiva.style.textDecoration = "underline";

const changeNavButtonInformacoes = document.querySelector(".btn_nav");
changeNavButtonInformacoes.onclick = () => {
  changeNavButton();
};

const toggle = document.getElementById("toggleSwitchInformacoes");
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
  "changeThemeMobileInformacoes"
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

const questions = document.querySelectorAll(".question");
const contents = document.querySelectorAll(".conteudo");

function removeActiveClass() {
  contents.forEach(content => content.classList.remove("active"));
}

questions.forEach(question => {
  question.onclick = () => {
    if (!question.nextElementSibling.classList.contains("active")) {
      removeActiveClass();
      question.nextElementSibling.classList.add("active");
    }
  }
});
