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

const toggle = document.getElementById("toggleSwitchSetores");
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