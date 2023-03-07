function changeNavButton() {
  const button = document.querySelector(".btn_nav");
  const nav_items = document.querySelector(".nav_items_mobile");

  button.classList.toggle("active");
  nav_items.classList.toggle("active");
}

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const sabado__bandas = data.sabado;
    const domingo__bandas = data.domingo;

    const sabado_list = document.getElementById("sabado_list");
    sabado__bandas.forEach((sabado) => {
      const li = document.createElement("li");
      li.textContent = sabado;
      sabado_list.appendChild(li);
    });

    const domingo_list = document.getElementById("domingo_list");
    domingo__bandas.forEach((domingo) => {
      const li = document.createElement("li");
      li.textContent = domingo;
      domingo_list.appendChild(li);
    });
  });
