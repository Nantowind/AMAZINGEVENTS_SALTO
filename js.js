let eventos = [
  {
    id: 1,
    image: "food_fair.jpg",
    name: "Festival of the collectivities",
    date: "2022-12-12",
    description:
      "Enjoy your favorite dishes from different countries in a unique event for the whole family.",
    category: "Food Fair",
    place: "Room A",
    capacity: 45000,
    assistance: 42756,
    price: 5,
  },
  {
    id: 2,
    image: "outing_to_the_museum.jpg",
    name: "Art Exhibition",
    date: "2022-11-02",
    description:
      "Let's go to the art museum for an incredible tour to learn about the largest dinosaurs.",
    category: "Museum",
    place: "Field",
    capacity: 82000,
    assistance: 65892,
    price: 15,
  },
  {
    id: 3,
    image: "costume_party.jpg",
    name: "Halloween Night",
    date: "2024-02-12",
    description:
      "Come in your scariest costume character to win amazing prizes.",
    category: "Costume Party",
    place: "Room C",
    capacity: 12000,
    estimate: 9000,
    price: 12,
  },
  {
    id: 4,
    image: "music_concert.jpg",
    name: "Metallica in concert",
    date: "2024-01-22",
    description: "The only concert of the most emblematic band in the world",
    category: "Music Concert",
    place: "Room A",
    capacity: 138000,
    estimate: 138000,
    price: 150,
  },
  {
    id: 5,
    image: "marathon.jpg",
    name: "10K for life",
    date: "2022-03-01",
    description: "Come and exercise, improve your health and lifestyle.",
    category: "Race",
    place: "Soccer Field",
    capacity: 30000,
    assistance: 25698,
    price: 3,
  },
  {
    id: 6,
    image: "books.jpg",
    name: "School Book Fair",
    date: "2022-10-15",
    description: "Bring your unused school book and bring the one you need.",
    category: "Book Exchange",
    place: "Room D1",
    capacity: 150000,
    assistance: 123286,
    price: 1,
  },
  {
    id: 7,
    image: "cinema.jpg",
    name: "Avengers",
    date: "2023-10-15",
    description:
      "Marvel's Avengers 3d premiere the start of an epic saga with your best superheroes",
    category: "Let's go to the cinema",
    place: "Room D1",
    capacity: 9000,
    estimate: 9000,
    price: 250,
  },
];

//Usamos el title para saber en que sitio estamos y segun eso filtrar los divs y cards que traermos
let title = document.getElementById("title");
//La fecha actual para saber si la fecha de el evento paso o esta por venir
let fechaActual = new Date();

//Traer Todos los divs y cards cuando termina de cargar la pagina
document.addEventListener("DOMContentLoaded", function () {
  //Se fija que el title sea igual a home y agrega los divs sin filtrar
  if (title.innerHTML.trim() === "Home") {
    for (let i = 0; i < eventos.length; i++) {
      agregarDivCartaYModal(i);
    }
    //se fija si el title es igual a upcoming events y trae los eventos que son mayor a la fecha actual
  } else if (title.innerHTML.trim() === "Upcoming events") {
    for (let i = 0; i < eventos.length; i++) {
      AgregarDivModalSiLaFechaActualEsMayor(i);
    }
    //se fija si el title es igual a past events y trae los eventos que son menor a la fecha actual
  } else if (title.innerHTML.trim() === "Past events") {
    for (let i = 0; i < eventos.length; i++) {
      AgregarDivModalSiLaFechaActualEsMenor(i);
    }
    //nos avisa si no correspondo a ninguna de las paginas
  } else {
    console.log("cara troste no funciono" + title.innerHTML);
  }
  eliminarElDivCartita();
});

//trae todos los checkbox
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

//itera en los checkbox y los escucha

for (var i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener("change", cambiosEnElCheckbox);
}

//funciones divs y modal

function AgregarDivModalSiLaFechaActualEsMenor(i) {
  if (new Date(eventos[i].date) < fechaActual) {
    agregarDivCartaYModal(i);
  }
}

function AgregarDivModalSiLaFechaActualEsMayor(i) {
  if (new Date(eventos[i].date) > fechaActual) {
    agregarDivCartaYModal(i);
  }
}

function agregarDivCartaYModal(i) {
  agregarDivCarta(i);
  agregarModal(i);
}

function agregarDivCarta(i) {
  let contenedor = document.getElementById("contenedor-galeria");
  let cartita = document.getElementById("cartita");

  let nuevoDiv = document.createElement("div");
  nuevoDiv.className = cartita.className; // Copia las clases del elemento cartita
  nuevoDiv.innerHTML = cartita.innerHTML; // Copia el contenido del elemento cartita
  nuevoDiv.setAttribute("data-category", eventos[i].place); //

  let imgElement = nuevoDiv.querySelector("img");
  imgElement.setAttribute("src", "./assets/" + eventos[i].image);

  let h2Element = nuevoDiv.querySelector("h2");
  h2Element.innerHTML = eventos[i].name;

  let pElement = nuevoDiv.querySelector("p");
  pElement.innerHTML = eventos[i].category;

  let h3Element = nuevoDiv.querySelector("h3");
  h3Element.innerHTML = "Price:" + eventos[i].price;

  let button = nuevoDiv.querySelector("button");
  button.setAttribute("data-bs-target", "#eventModal" + [i]);
  agregarModal(i);
  // Agrega el nuevo div al mismo nivel que el elemento cartita
  contenedor.appendChild(nuevoDiv);
}

function agregarModal(i) {
  let body = document.getElementById("body");
  let modal = document.getElementById("eventModal");

  let nuevoModal = document.createElement("div");
  nuevoModal.setAttribute("id", "eventModal" + [i]);
  nuevoModal.setAttribute("aria-labelledby", "eventModal" + [i] + "Label");

  nuevoModal.className = modal.className;
  nuevoModal.innerHTML = modal.innerHTML;

  let h5Element = nuevoModal.querySelector("h5");
  h5Element.setAttribute("id", "eventModal" + [i] + "Label");
  h5Element.innerHTML = eventos[i].name;

  let pElement = nuevoModal.querySelector("p");
  pElement.innerHTML = eventos[i].description;

  body.appendChild(nuevoModal);
}

function eliminarElDivCartita() {
  let cartita = document.getElementById("cartita");
  cartita.remove();
}

//funciones form checkbox
function quitarFiltroPuesto(label) {
  let contenedor = document.getElementById("contenedor-galeria");
  let divsHijos = contenedor.querySelectorAll(".ultimate-test");

  for (let i = 0; i < divsHijos.length; i++) {
    let div = divsHijos[i];
    let categoria = div.getAttribute("data-category");

    if (categoria != label.textContent) {
      div.style.cssText = "display: flex !important;";
    }
  }
}
function filtrarTodosLosElementos(label) {
  let contenedor = document.getElementById("contenedor-galeria");
  let divsHijos = contenedor.querySelectorAll(".ultimate-test");

  for (let i = 0; i < divsHijos.length; i++) {
    let div = divsHijos[i];
    let categoria = div.getAttribute("data-category");

    if (categoria != label.textContent) {
      div.style.cssText = "display: none !important;";
    }
  }
}

// Función para manejar el cambio en el checkbox
function cambiosEnElCheckbox(event) {
  // Obtener el checkbox que toco
  var checkbox = event.target;

  //  obtiene el elemento siguiente que es un label
  var label = checkbox.nextElementSibling;

  // Si el elemento se marco filtra todos los diferentes al marcado
  if (checkbox.checked) {
    filtrarTodosLosElementos(label);
    deshabilitarCheckBox(checkbox);
  } else {
    // Si el elemento se desmarco cambia todos para que vuelvan a como antes
    quitarFiltroPuesto(label);
    habilitarCheckbox(checkbox);
  }
}

function deshabilitarCheckBox(checkbox) {
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i] !== checkbox) {
      checkboxes[i].disabled = true;
    }
  }
}

function habilitarCheckbox(checkbox) {
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i] !== checkbox) {
      checkboxes[i].disabled = false;
    }
  }
}
