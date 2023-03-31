import changeNavButton from "./index.js";
import { setTheme } from "./experiencia.js";

window.addEventListener("load", function() {
  setTheme();
})

const paginaAtiva = document.getElementById("pagina_ativa");
paginaAtiva.style.textDecoration = "underline";

const changeNavButtonSetores = document.querySelector(".btn_nav");
changeNavButtonSetores.onclick = () => {
  changeNavButton();
};