import changeNavButton from "./index.js";
import { setTheme } from "./experiencia.js";

window.addEventListener("load", function () {
  setTheme();
});

window.onload = function () {
  changeIngressoInfo();
};

const toggle = document.getElementById("toggleSwitchIngressoComprado");
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

function changeIngressoInfo() {
  let nome = document.getElementById("nome");
  let ingresso = document.getElementById("ingresso");
  nome.innerHTML = localStorage.getItem("nome");
  ingresso.innerHTML = localStorage.getItem("ingresso");
}

const paginaAtiva = document.getElementById("pagina_ativa");
paginaAtiva.style.textDecoration = "underline";

const changeNavButtonIngressoComprado = document.querySelector(".btn_nav");
changeNavButtonIngressoComprado.onclick = () => {
  changeNavButton();
};
