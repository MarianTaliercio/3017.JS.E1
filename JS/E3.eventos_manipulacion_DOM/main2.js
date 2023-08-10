const form = document.getElementById("form");
const container = document.getElementById("container");
const error = document.getElementById("error");
const inputNmber = document.getElementById("input-number");

const init = () => {
  form.addEventListener("submit", searchPizza);
};

const searchPizza = (e) => {
  e.preventDefault();

  const pizza = pizzas.find((pizza) => pizza.id == inputNmber.value);

  if (pizza) {
    container.innerHTML = `
      <div>
        <h2>${pizza.nombre}</h2>
        <p>Precio: $${pizza.precio}</p>
        <img src="${pizza.imagen}" alt="${pizza.nombre}" width="200">
      </div>
    `;
  } else {
    container.innerHTML = "<p>Pizza no encontrada</p>";
  }
};

init();