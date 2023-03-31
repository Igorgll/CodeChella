import changeNavButton from "./index.js";

window.addEventListener("load", function () {
  setTheme();
});

const paginaAtiva = document.getElementById("pagina_ativa");
if(paginaAtiva) {
  paginaAtiva.style.textDecoration = "underline";
}

const changeNavButtonExperiencia = document.querySelector(".btn_nav");
changeNavButtonExperiencia.onclick = () => {
  changeNavButton();
};

export function setTheme() {
  let savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }
}
