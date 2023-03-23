import changeNavButton from "./index.js";

const paginaAtiva = document.getElementById("pagina_ativa");
paginaAtiva.style.textDecoration = "underline";

const changeNavButtonIngresso = document.querySelector(".btn_nav");
changeNavButtonIngresso.onclick = () => {
  changeNavButton();
};