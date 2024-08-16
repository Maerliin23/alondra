var heart = document.querySelector(".heart"),
  reload = document.querySelector(".reload"),
  hearts = document.querySelector(".hearts"),
  allHearts = document.querySelectorAll(".hearts div"),
  heartAnime = document.querySelector(".heart.anime");

heart.addEventListener("click", animation);

reload.addEventListener("click", refresh);

function animation() {
  heart.classList.add("active");
  reload.setAttribute(
    "style",
    "opacity: 1; cursor: pointer; pointer-events: auto;  "
  );
  heartAnime.style.opacity = "0";

  allHearts.forEach(function (element) {
    element.classList.add("active");
  });
}

function refresh() {
  heart.classList.remove("active");
  reload.setAttribute("style", "opacity: 0; pointer-events: none;");
  heartAnime.style.opacity = "1";

  allHearts.forEach(function (element) {
    element.classList.remove("active");
  });
}

// Crear el contenedor y el botón
var buttonContainer = document.createElement("div");
var nextButton = document.createElement("button");

// Agregar clases y texto al botón
buttonContainer.classList.add("button-container");
nextButton.classList.add("next-button");
nextButton.innerHTML = "Siguiente &#8594;"; // Texto del botón con flecha

// Insertar el botón en el DOM
buttonContainer.appendChild(nextButton);
document.body.appendChild(buttonContainer);

// Añadir estilos al contenedor y botón
var style = document.createElement("style");
style.innerHTML = `
  .button-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
  }

  .next-button {
    background-color: transparent;
    border: 3px solid white;
    color: #fc6998; 
    border-radius: 10px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease, border-color 0.3s ease;
  }

  .next-button:hover {
    background-color: rgba(255, 255, 255, 0.2);
    border-color: white;
  }

  .next-button:focus {
    outline: none;
  }
`;
document.head.appendChild(style);

// Evento de clic para redirigir a carta.html
nextButton.addEventListener("click", function () {
  window.location.href = "regalo.html"; // Redirigir a carta.html
});
