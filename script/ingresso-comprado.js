import changeNavButton from "./index.js";

const paginaAtiva = document.getElementById("pagina_ativa");
paginaAtiva.style.textDecoration = "underline";

const changeNavButtonIngressoComprado = document.querySelector(".btn_nav");
changeNavButtonIngressoComprado.onclick = () => {
  changeNavButton();
};
