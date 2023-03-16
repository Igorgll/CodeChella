import changeNavButton from "./index.js";
import { changeFontColor } from "./index.js";
import { changeNavbarBackground } from "./index.js";
import { changeFooterBackground } from "./index.js";
import { changeFooterLogoColor } from "./index.js";
import { changeSocialIconsColor } from "./index.js";
import { changeNavbarMobileBackground } from "./index.js";

const changeNavButtonExperiencia = document.querySelector(".btn_nav");
changeNavButtonExperiencia.onclick = () => {
  changeNavButton();
};

// muda o gradient do background
function changeBackgroundToBoreal() {
  const background = document.querySelector(".section_experiencia");
  if (
    background.style.getPropertyValue("background") === "var(--gradient-boreal)"
  ) {
    background.style.setProperty("background", "var(--gradient)");
  } else {
    background.style.setProperty("background", "var(--gradient-boreal)");
  }
}

// muda o banner
function changeBannerBackground() {
  const banner = document.querySelector(".banner_experiencia");
  banner.classList.toggle("banner_experiencia_boreal");
}

const toggleTheme = document.getElementById("toggleSwitchExperiencia");
toggleTheme.onclick = () => {
  toggleBorealThemeExperiencia();
};

const toggleThemeMobile = document.getElementById(
  "changeThemeMobileExperiencia"
);
toggleThemeMobile.onclick = () => {
  toggleBorealThemeExperiencia();
};

function toggleBorealThemeExperiencia() {
  changeFontColor();
  changeNavbarBackground();
  changeBackgroundToBoreal();
  changeFooterBackground();
  changeFooterLogoColor();
  changeSocialIconsColor();
  changeBannerBackground();
  changeNavbarMobileBackground();
}
