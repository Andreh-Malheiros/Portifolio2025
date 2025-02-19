const carousel = document.querySelector(".carrosel");
const images = document.querySelectorAll(".card");
const prevBtn = document.getElementById("antes");
const nextBtn = document.getElementById("proximo");
const telaCadastro = document.getElementById("tela-cadastro-projeto")
const listaTarefas = document.getElementById("lista-de-tarefas")

let index = 0;

function updateCarousel() {
  const offset = -index * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

nextBtn.addEventListener("click", () => {
  index = (index + 1) % images.length;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  updateCarousel();
});

function mascaraCelular() {
  var tel = document.getElementById("numero-form").value;
  tel = tel.slice(0, 14);

  document.getElementById("numero-form").value = tel;

  var tel_formatado = document.getElementById("numero-form").value;
  if (tel_formatado[0] != "(") {
    if (tel_formatado[0] != undefined) {
      document.getElementById("numero-form").value = "(" + tel_formatado[0];
    }
  }

  if (tel_formatado[3] != ")") {
    if (tel_formatado[3] != undefined) {
      document.getElementById("numero-form").value =
        tel_formatado.slice(0, 3) + ")" + tel_formatado[3];
    }
  }

  if (tel_formatado[9] != "-") {
    if (tel_formatado[9] != undefined) {
      document.getElementById("numero-form").value =
        tel_formatado.slice(0, 9) + "-" + tel_formatado[9];
    }
  }
};

const checkbox = document.querySelector("#input-switch-color");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'white');
  }
});


const theme = window.localStorage.getItem('theme');
if (theme === "dark") document.body.classList.add("dark");

checkbox.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (theme === "dark") {
    window.localStorage.setItem("theme", "white");
  } else window.localStorage.setItem("theme", "dark");
});

document.querySelector("#form-contato").addEventListener("submit", function (event) {
  event.target.submit();

  const button = document.querySelector("#btn-enviar-form");
  button.disabled = true;


  setTimeout(() => {
    button.disabled = false;
  }, 5000);
});