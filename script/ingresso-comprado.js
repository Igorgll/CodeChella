import changeNavButton from "./index.js";
import { changeNavbarBackground } from "./index.js";
import { changeFontColor } from "./index.js";
import { changeFooterBackground } from "./index.js";
import { changeFooterLogoColor } from "./index.js";
import { changeSocialIconsColor } from "./index.js";

const paginaAtiva = document.getElementById("pagina_ativa");
paginaAtiva.style.textDecoration = "underline";

const changeNavButtonIngressoComprado = document.querySelector(".btn_nav");
changeNavButtonIngressoComprado.onclick = () => {
  changeNavButton();
};

const changeThemeIngressoComprado = document.getElementById(
  "toggleSwitchIngressoComprado"
);
changeThemeIngressoComprado.onclick = () => {
  changeThemeToBorealIngressoComprado();
};

function changeBackgroundGradientIngressoComprado() {
  const ingressoCompradoBg = document.querySelector(".section_ingresso");
  ingressoCompradoBg.classList.toggle("active");
}

function changeIngressoCompradoBackground() {
  const ingressoBg = document.querySelector(".ingresso_qrcode");
  ingressoBg.classList.toggle("active");
}

function changeQrCodeIngressoLogo() {
  const logoIngresso = document.getElementById("logo_ingresso");
  if (logoIngresso.src.includes("/assets/Logo1.svg")) {
    logoIngresso.src = "/assets/logo-ingresso-boreal.svg";
  } else {
    logoIngresso.src = "/assets/Logo1.svg";
  }
}

function changeBannerBorealIngressoComprado() {
  const banner_ingresso_comprado = document.querySelector(".banner_ingresso-comprado");
  banner_ingresso_comprado.classList.toggle("banner_ingresso_comprado-boreal");
}

function changeThemeToBorealIngressoComprado() {
  changeFontColor();
  changeNavbarBackground();
  changeBannerBorealIngressoComprado()
  changeBackgroundGradientIngressoComprado();
  changeQrCodeIngressoLogo();
  changeIngressoCompradoBackground();
  changeFooterBackground();
  changeSocialIconsColor();
  changeFooterLogoColor();
}
