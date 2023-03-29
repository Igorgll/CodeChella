import changeNavButton from "./index.js";
import { changeNavbarBackground } from "./index.js";
import { changeNavbarMobileBackground } from "./index.js";
import { changeFooterBackground } from "./index.js";
import { changeFooterLogoColor } from "./index.js";
import { changeSocialIconsColor } from "./index.js";
import { changeFontColor } from "./index.js";

let nome = document.getElementById("nome");
let email = document.getElementById("email");
let data = document.getElementById("data");
let inputSpanNome = document.getElementById("inputSpanNome");
let inputSpanEmail = document.getElementById("inputSpanEmail");
let inputSpanData = document.getElementById("inputSpanData");
let nomeValido = false;
let emailValido = false;
let dataValido = false;
let tipoIngresso = false;

nome.onkeyup = () => {
  const regexLetras = /^[a-zA-ZçÇ\s]+$/;
  if (nome.value.length < 0 || nome.value.length < 3) {
    inputSpanNome.style.color = "red";
    inputSpanNome.innerHTML = "O nome precisa ser maior que 3 caracteres.";
  } else if (!regexLetras.test(nome.value)) {
    inputSpanNome.style.color = "red";
    inputSpanNome.innerHTML = "Por favor, insira somente letras.";
  } else {
    inputSpanNome.innerHTML = "";
    nomeValido = true;
    localStorage.setItem("nome", nome.value);
  }
};

email.onkeyup = () => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email.value) || email.value.length < 0) {
    inputSpanEmail.style.color = "red";
    inputSpanEmail.innerHTML = "Por favor, insira um email válido.";
  } else {
    inputSpanEmail.innerHTML = "";
    emailValido = true;
    localStorage.setItem("email", email.value);
  }
};

data.onkeyup = () => {
  const dataRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(\d{4})$/;
  if (!dataRegex.test(data.value) || data.value.length < 0) {
    inputSpanData.style.color = "red";
    inputSpanData.innerHTML =
      "Por favor, insira uma data válida no formato dd/mm/aaaa.";
  } else {
    const dataNascimento = new Date(data.value);
    const dataAtual = new Date();

    const idadeMinima = 16;
    const diffAnos = dataAtual.getFullYear() - dataNascimento.getFullYear();
    const diffMeses = dataAtual.getMonth() - dataNascimento.getMonth();
    const diffDias = dataAtual.getDate() - dataNascimento.getDate();

    let idade = diffAnos;

    if (diffMeses < 0 || (diffMeses === 0 && diffDias < 0)) {
      idade--;
    }

    if (idade >= idadeMinima) {
      inputSpanData.innerHTML = "";
      dataValido = true;
      localStorage.setItem("data", data.value);
    } else {
      inputSpanData.style.color = "red";
      inputSpanData.innerHTML =
        "Entrada permitida apenas com acompanhamento dos responsáveis.";
      dataValido = true;
    }
  }
};

let optionIngresso = document.getElementById("tipoIngresso");
optionIngresso.options[0].hidden = true;
optionIngresso.addEventListener("change", () => {
  let opcaoSelecionada = optionIngresso.value;
  tipoIngresso = true;
  localStorage.setItem("ingresso", opcaoSelecionada);
});

const btnIngresso = document.getElementById("btn_ingresso");
btnIngresso.onclick = () => {
  enviaForm();
};

function enviaForm() {
  if (
    nomeValido == true &&
    emailValido == true &&
    dataValido == true &&
    tipoIngresso == true
  ) {
    window.location.href = "/ingresso-comprado.html";
  } else {
    alert("Preencha o formulário corretamente, por favor!");
  }
}

const paginaAtiva = document.getElementById("pagina_ativa");
paginaAtiva.style.textDecoration = "underline";

const changeNavButtonIngresso = document.querySelector(".btn_nav");
changeNavButtonIngresso.onclick = () => {
  changeNavButton();
};

const toggleThemeMobile = document.getElementById("changeThemeMobileIngresso");
toggleThemeMobile.onclick = () => {
  changeThemeToBorealIngresso();
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
  changeNavbarMobileBackground();
  changeBackgroundGradientIngresso();
  changeBtnBackground();
  changeFooterBackground();
  changeFooterLogoColor();
  changeSocialIconsColor();
}
