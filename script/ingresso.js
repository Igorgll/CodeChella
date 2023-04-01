import changeNavButton from "./index.js";
import { setTheme } from "./experiencia.js";

window.addEventListener("load", function () {
  setTheme();
});

const toggle = document.getElementById("toggleSwitchIngresso");
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

const changeThemeMobile = document.getElementById(
  "changeThemeMobileIngresso"
);
if (changeThemeMobile) {
  changeThemeMobile.addEventListener("click", () => {
    let targetTheme;
    let currentTheme = document.documentElement.getAttribute("data-theme");

    if (currentTheme === "verao") {
      targetTheme = "boreal";
      changeThemeMobile.checked = true;
    } else {
      targetTheme = "verao";
      changeThemeMobile.checked = false;
    }

    document.documentElement.setAttribute("data-theme", targetTheme);
    localStorage.setItem("theme", targetTheme);
  });
}

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

    if (idade < 10) {
      inputSpanData.style.color = "red";
      inputSpanData.innerHTML = "Entrada não permitida.";
    } else if (idade >= idadeMinima) {
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
