import changeNavButton from "./index.js";
import { changeNavbarBackground } from "./index.js";
import { changeFooterBackground } from "./index.js";
import { changeFooterLogoColor } from "./index.js";
import { changeSocialIconsColor } from "./index.js";
import { changeFontColor } from "./index.js";

const paginaAtiva = document.getElementById("pagina_ativa");
paginaAtiva.style.textDecoration = "underline";

const changeNavButtonIngresso = document.querySelector(".btn_nav");
changeNavButtonIngresso.onclick = () => {
  changeNavButton();
};

const changeThemeIngresso = document.getElementById("toggleSwitchIngresso");
changeThemeIngresso.onclick = () => {
  changeThemeToBorealIngresso();
};

function changeBackgroundGradientIngresso() {
  const ingressoBg = document.querySelector(".section_ingresso");
  ingressoBg.classList.toggle("active");
}

function changeBannerBorealIngresso() {
  const banner_ingresso = document.querySelector(".banner_ingresso");
  banner_ingresso.classList.toggle("banner_ingresso_boreal");
}

function changeBtnBackground() {
  const btn = document.getElementById("btn_ingresso");
  btn.classList.toggle("bg-primaria");
}

function changeThemeToBorealIngresso() {
  changeFontColor();
  changeBannerBorealIngresso();
  changeNavbarBackground();
  changeBackgroundGradientIngresso();
  changeBtnBackground();
  changeFooterBackground();
  changeFooterLogoColor();
  changeSocialIconsColor();
}
