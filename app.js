// Constantes y variables
const formulario = document.querySelector("#formCards");
const containerCards = document.querySelector("#containerCards");
let previousTitle = document.title;
const btnTheme = document.querySelector("#btnTheme");

// Event Listeners
eventListeners()
function eventListeners() {
    formulario.addEventListener("submit", agregarCard);

    window.addEventListener("blur", () => {
        previousTitle = document.title;
        document.title = '¡No te vayas! ¡Vuelve!'
    })

    window.addEventListener("focus", () => {
        document.title = previousTitle
    })

};

// Funciones

function agregarCard(e) {
    e.preventDefault()

    const titlePelicula = document.querySelector("#titlePelicula");
    const descPelicula = document.querySelector("#descPelicula");
    const imgPelicula = document.querySelector("#imgPelicula");

    const alertError = document.querySelector("#alert");

    // console.log(titlePelicula.value);
    // console.log(descPelicula.value);
    // console.log(imgPelicula.value);

    if(titlePelicula.value === "" || descPelicula.value === "" || imgPelicula.value === "") {
        alertError.classList.remove("d-none");
        return
    } else {
        console.log("Correcto");
    }

    setTimeout(() => {
        alertError.classList = "d-none"
    }, 1500);

    const divCard = document.createElement("div")
    divCard.className = "col-12 col-md-6 col-lg-4 d-flex justify-content-center";
    divCard.innerHTML = `
    <div class="card" style="width: 18rem; id="cards">
                    <img src="${imgPelicula.value}"
                    width="286" height="200" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${titlePelicula.value}</h5>
                        <p class="card-text">${descPelicula.value}</p>
                        <div class="text-center">
                            <button type="button" class="btn btn-danger">Delete</button>
                        </div>
                    </div>
    </div>
    `

    const btnBorrar = divCard.querySelector("button");

    btnBorrar.addEventListener("click", (e) => {
        eliminarCard(e)
    })


    containerCards.appendChild(divCard);

}

function eliminarCard(e) {
    e.preventDefault
    e.target.parentElement.parentElement.parentElement.parentElement.remove()

}

function darkTheme(e) {
    e.preventDefault();

} 




