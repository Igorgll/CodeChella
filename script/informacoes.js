import changeNavButton from "./index.js";

const paginaAtiva = document.getElementById("pagina_ativa");
paginaAtiva.style.textDecoration = "underline";

const changeNavButtonInformacoes = document.querySelector(".btn_nav");
changeNavButtonInformacoes.onclick = () => {
  changeNavButton();
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
