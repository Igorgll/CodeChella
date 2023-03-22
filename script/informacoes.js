import changeNavButton from "./index.js";

const paginaAtiva = document.getElementById("pagina_ativa");
paginaAtiva.style.textDecoration = "underline";

const changeNavButtonInformacoes = document.querySelector(".btn_nav");
changeNavButtonInformacoes.onclick = () => {
  changeNavButton();
};
