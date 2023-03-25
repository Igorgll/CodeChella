import changeNavButton from "./index.js";
import { changeFontColor } from "./index.js";
import { changeNavbarBackground } from "./index.js";
import { changeFooterLogoColor } from "./index.js";
import { changeFooterBackground } from "./index.js";
import { changeSocialIconsColor } from "./index.js";
import { changeNavbarMobileBackground } from "./index.js";

const paginaAtiva = document.getElementById("pagina_ativa");
paginaAtiva.style.textDecoration = "underline";

const changeNavButtonInformacoes = document.querySelector(".btn_nav");
changeNavButtonInformacoes.onclick = () => {
  changeNavButton();
};

const toggleThemeMobile = document.getElementById("changeThemeMobileInformacoes");
toggleThemeMobile.onclick = () => {
  changeThemeToBorealInformacoes();
};

const first_question = document.querySelector(".first_question");
const first_content = document.querySelector(".conteudo_first");
first_question.onclick = () => {
  first_content.classList.toggle("active");
};

const second_question = document.querySelector(".second_question");
const second_content = document.querySelector(".conteudo_second");
second_question.onclick = () => {
  second_content.classList.toggle("active");
};

const third_question = document.querySelector(".third_question");
const third_content = document.querySelector(".conteudo_third");
third_question.onclick = () => {
  third_content.classList.toggle("active");
};

const fourth_question = document.querySelector(".fourth_question");
const fourth_content = document.querySelector(".conteudo_fourth");
fourth_question.onclick = () => {
  fourth_content.classList.toggle("active");
};

const fifth_question = document.querySelector(".fifth_question");
const fifth_content = document.querySelector(".conteudo_fifth");
fifth_question.onclick = () => {
  fifth_content.classList.toggle("active");
};

function changeBackgroundGradientInformacoes() {
  const informacoesBg = document.querySelector(".section_informacoes");
  informacoesBg.classList.toggle("active");
}

function changeBannerBorealInformacoes() {
  const banner_informacoes = document.querySelector(".banner_informacoes");
  banner_informacoes.classList.toggle("banner_informacoes_boreal");
}

function changeFontColorInformacoes() {
  const textElements = document.querySelectorAll(
    "body *:not(script):not(style)"
  );
  for (let i = 0; i < textElements.length; i++) {
    const elementClass = textElements[i].getAttribute("class");
    if (
      elementClass &&
      (elementClass.includes("first_conteudo") ||
        elementClass.includes("second_conteudo") ||
        elementClass.includes("third_conteudo") ||
        elementClass.includes("fourth_conteudo") ||
        elementClass.includes("fifth_conteudo"))
    ) {
    } else {
      textElements[i].classList.toggle("font-branco");
    }
  }
}

function changeQuestionsBackground() {
  const first = document.querySelector(".first_question");
  first.classList.toggle("bg-primaria");

  const second = document.querySelector(".second_question");
  second.classList.toggle("bg-primaria");

  const third = document.querySelector(".third_question");
  third.classList.toggle("bg-primaria");

  const fourth = document.querySelector(".fourth_question");
  fourth.classList.toggle("bg-primaria");

  const fifth = document.querySelector(".fifth_question");
  fifth.classList.toggle("bg-primaria");
}

const changeThemeInformacoes = document.getElementById(
  "toggleSwitchInformacoes"
);
changeThemeInformacoes.onclick = () => {
  changeThemeToBorealInformacoes();
};

function changeThemeToBorealInformacoes() {
  changeFontColorInformacoes();
  changeNavbarBackground();
  changeNavbarMobileBackground();
  changeBannerBorealInformacoes();
  changeQuestionsBackground();
  changeFooterLogoColor();
  changeFooterBackground();
  changeSocialIconsColor();
  changeBackgroundGradientInformacoes();
}
