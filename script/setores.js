import changeNavButton from "./index.js";

const paginaAtiva = document.getElementById("pagina_ativa");
paginaAtiva.style.textDecoration = "underline";

const changeNavButtonSetores = document.querySelector(".btn_nav");
changeNavButtonSetores.onclick = () => {
  changeNavButton();
};