// Constantes y variables
const formulario = document.querySelector("#formCards");
const containerCards = document.querySelector("#containerCards");
let previousTitle = document.title;
const btnTheme = document.querySelector("#btnTheme");

// Event Listeners
eventListeners();
function eventListeners() {
  formulario.addEventListener("submit", agregarCard);

  btnTheme.addEventListener("click", cambiarTema);

  window.addEventListener("blur", () => {
    previousTitle = document.title;
    document.title = "¡No te vayas! ¡Vuelve!";
  });

  window.addEventListener("focus", () => {
    document.title = previousTitle;
  });
}

// Funciones

function agregarCard(e) {
  e.preventDefault();

  const titlePelicula = document.querySelector("#titlePelicula");
  const descPelicula = document.querySelector("#descPelicula");
  const imgPelicula = document.querySelector("#imgPelicula");

  const alertError = document.querySelector("#alert");

  // console.log(titlePelicula.value);
  // console.log(descPelicula.value);
  // console.log(imgPelicula.value);

  if (
    titlePelicula.value === "" ||
    descPelicula.value === "" ||
    imgPelicula.value === ""
  ) {
    alertError.classList.remove("d-none");
    setTimeout(() => {
      alertError.classList.add("d-none");
    }, 1500);
    return;
  } else {
    console.log("Correcto");
  }

  const divCard = document.createElement("div");
  divCard.className = "col-12 col-md-6 col-lg-4 d-flex justify-content-center";
  divCard.innerHTML = `
    <div class="card" style="width: 18rem; id="cards">
                    <img src="${imgPelicula.value}"
                    width="286" height="200" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${titlePelicula.value}</h5>
                        <p class="card-text">${descPelicula.value}</p>
                        <div class="text-center">
                            <button type="button" class="btn btn-danger" id="delete">Borrar</button>
                            <button type="button" class="btn btn-primary" id="edit">Editar</button>
                        </div>
                    </div>
    </div>
    `;

  const btnBorrar = divCard.querySelector("#delete");
  const btnEditar = divCard.querySelector("#edit");

  btnBorrar.addEventListener("click", (e) => {
    eliminarCard(e, divCard);
  });

  containerCards.appendChild(divCard);

  btnEditar.addEventListener("click", function () {
    // permitir la edición del título y del contenido
    const title = divCard.querySelector("h5");
    const content = divCard.querySelector("p");
    title.contentEditable = true;
    content.contentEditable = true;
    title.focus();

    // cambiar el texto del botón a "Guardar"
    btnEditar.textContent = "Guardar";

    // agregar un listener de evento al botón para guardar los cambios
    btnEditar.addEventListener("click", function () {
      // desactivar la edición del título y del contenido
      title.contentEditable = false;
      content.contentEditable = false;

      // cambiar el texto del botón de vuelta a "Editar"
      btnEditar.textContent = "Editar";
    });
  });
}

function eliminarCard(e, element) {
  e.preventDefault;
  element.remove();
}

function cambiarTema(e) {
  e.preventDefault();

  if (document.documentElement.getAttribute("data-bs-theme") === "light") {
    document.documentElement.setAttribute("data-bs-theme", "dark");
    btnTheme.querySelector("i").classList =
      "bi bi-brightness-high text-warning";
  } else {
    document.documentElement.setAttribute("data-bs-theme", "light");
    btnTheme.querySelector("i").classList = "bi bi-moon";
  }
}
