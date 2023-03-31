import changeNavButton from "./index.js";
import { setTheme } from "./experiencia.js";

window.addEventListener("load", function() {
  setTheme();
})

window.onload = function () {
  changeIngressoInfo();
};

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