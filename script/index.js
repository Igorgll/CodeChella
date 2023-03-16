export default function changeNavButton() {
  const button = document.querySelector(".btn_nav");
  const nav_items = document.querySelector(".nav_items_mobile");

  button.classList.toggle("active");
  nav_items.classList.toggle("active");
}

const btnMobile = document.querySelector(".btn_nav");
btnMobile.onclick = () => {
  changeNavButton();
};

const changeTheme = document.querySelector("#toggleSwitch");
if (changeTheme) {
  changeTheme.onclick = () => {
    toggleBorealTheme();
  };

  const changeThemeMobile = document.getElementById("changeThemeMobile");
  changeThemeMobile.onclick = () => {
    toggleBorealTheme();
  };
}

// mudar cor da font
export function changeFontColor() {
  const textElements = document.querySelectorAll(
    "body *:not(script):not(style)"
  );
  for (let i = 0; i < textElements.length; i++) {
    textElements[i].classList.toggle("font-branco");
  }
}

//mudar background navbar
export function changeNavbarBackground() {
  const navbar = document.querySelector(".navbar");
  if (navbar.style.getPropertyValue("background") === "var(--primaria)") {
    navbar.style.setProperty("background", "var(--azul-escuro)");
  } else {
    navbar.style.setProperty("background", "var(--primaria)");
  }
}

//mudar background da navbar mobile
export function changeNavbarMobileBackground() {
  const navbarMobile = document.querySelector(".nav_items_mobile");
  navbarMobile.classList.toggle("navbarMobileBoreal");
}

//mudar cor do logo do footer
export function changeFooterLogoColor() {
  const imgFooter = document.querySelector(".socials img");
  if (imgFooter.src.includes("/assets/Logo1.svg")) {
    imgFooter.src = "/assets/Logo1 2.svg";
  } else {
    imgFooter.src = "/assets/Logo1.svg";
  }
}

// mudar background do footer
export function changeFooterBackground() {
  const footer = document.getElementsByTagName("footer")[0];
  footer.classList.toggle("footer-bg");
}

// mudar a cor dos icones do footer
export function changeSocialIconsColor() {
  const wpp = document.querySelector(".acesse ul li:first-child img");
  const twitch = document.querySelector(".acesse ul li:nth-child(2) img");
  const instagram = document.querySelector(".acesse ul li:nth-child(3) img");
  const twitter = document.querySelector(".acesse ul li:nth-child(4) img");
  if (
    wpp.src.includes("/assets/wpp-white.svg") ||
    twitch.src.includes("/assets/twitch-white.svg") ||
    instagram.src.includes("/assets/instagram-white.scg") ||
    twitter.src.includes("/assets/twitter-white.svg")
  ) {
    wpp.src = "/assets/wpp.svg";
    twitch.src = "/assets/twitch.svg";
    twitter.src = "/assets/twitter.svg";
    instagram.src = "/assets/instagram.svg";
  } else {
    wpp.src = "/assets/wpp-white.svg";
    twitch.src = "/assets/twitch-white.svg";
    instagram.src = "/assets/instagram-white.svg";
    twitter.src = "/assets/twitter-white.svg";
  }
}

function toggleBorealTheme() {
  //banner
  const banner = document.querySelector(".banner");
  banner.classList.toggle("bg-boreal");

  // alurodromo img
  const img = document.querySelector(".alurodromo img");
  img.classList.toggle("alurodromoImg");

  // h2 sabado e domingo
  const h2_sabado = document.querySelector(".sabado h2");
  const h2_domingo = document.querySelector(".domingo h2");
  h2_sabado.classList.toggle("sabado-bg");
  h2_domingo.classList.toggle("sabado-bg");
  const line = document.querySelectorAll(".line");
  for (let i = 0; i < line.length; i++) {
    // loop para pegar todos os spans com a class .line
    line[i].classList.toggle("line-color");
  }

  //div dates
  const datesDiv = document.querySelector(".dates");
  if (
    datesDiv.style.getPropertyValue("background") === "var(--gradient-boreal)"
  ) {
    datesDiv.style.setProperty("background", "var(--gradient)");
  } else {
    datesDiv.style.setProperty("background", "var(--gradient-boreal)");
  }

  // botão comprar
  const btnComprar = document.querySelector(".btn_comprar");
  btnComprar.classList.toggle("button-bg-boreal");

  //footer banner
  const footerBanner = document.querySelector(".banner_footer_div");
  footerBanner.classList.toggle("footerBannerBoreal");

  changeFontColor();
  changeNavbarBackground();
  changeFooterBackground();
  changeFooterLogoColor();
  changeSocialIconsColor();
  changeNavbarMobileBackground();
}
