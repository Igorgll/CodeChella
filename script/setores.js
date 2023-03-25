import changeNavButton from "./index.js";
import { changeFontColor } from "./index.js";
import { changeNavbarBackground } from "./index.js";
import { changeFooterLogoColor } from "./index.js";
import { changeFooterBackground } from "./index.js";
import { changeSocialIconsColor } from "./index.js";
import { changeNavbarMobileBackground } from "./index.js";

const paginaAtiva = document.getElementById("pagina_ativa");
paginaAtiva.style.textDecoration = "underline";

const changeNavButtonSetores = document.querySelector(".btn_nav");
changeNavButtonSetores.onclick = () => {
  changeNavButton();
};

function changeBackgroundGradientSetores() {
  const setoresBg = document.querySelector(".section_setores");
  setoresBg.classList.toggle("active");
}

function changeBannerBorealSetores() {
  const banner_setores = document.querySelector(".banner_setores");
  banner_setores.classList.toggle("banner_setores_boreal");
}

const changeThemeSetores = document.getElementById("toggleSwitchSetores");
changeThemeSetores.onclick = () => {
  changeThemeToBorealSetores();
};

function changeThemeToBorealSetores() {
  changeFontColor();
  changeNavbarBackground();
  changeFooterLogoColor();
  changeFooterBackground();
  changeSocialIconsColor();
  changeNavbarMobileBackground();
  changeBackgroundGradientSetores();
  changeBannerBorealSetores();
}
