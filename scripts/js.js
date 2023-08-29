let eventos = [
  {
    _id: "639c723b992482e5f2834be9",
    name: "Collectivities Party",
    image: "https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
    date: "2022-12-12",
    description:
      "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
    category: "Food Fair",
    place: "Room A",
    capacity: 45000,
    assistance: 42756,
    price: 5,
    __v: 0,
  },
  {
    _id: "639c723b992482e5f2834beb",
    name: "Korean style",
    image: "https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
    date: "2023-08-12",
    description:
      "Enjoy the best Korean dishes, with international chefs and awesome events.",
    category: "Food Fair",
    place: "Room A",
    capacity: 45000,
    price: 10,
    __v: 0,
    estimate: 42756,
  },
  {
    _id: "639c723c992482e5f2834bed",
    name: "Jurassic Park",
    image: "https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
    date: "2022-11-02",
    description:
      "Let's go meet the biggest dinosaurs in the paleontology museum.",
    category: "Museum",
    place: "Field",
    capacity: 82000,
    price: 15,
    __v: 0,
    assistance: 65892,
  },
  {
    _id: "639c723c992482e5f2834bef",
    name: "Parisian Museum",
    image: "https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
    date: "2023-11-02",
    description:
      "A unique tour in the city of lights, get to know one of the most iconic places.",
    category: "Museum",
    place: "Paris",
    capacity: 8200,
    estimate: 8200,
    price: 3500,
    __v: 0,
  },
  {
    _id: "639c723c992482e5f2834bf1",
    name: "Comicon",
    image: "https://i.postimg.cc/KYD0jMf2/comicon.jpg",
    date: "2022-02-12",
    description:
      "For comic lovers, all your favourite characters gathered in one place.",
    category: "Costume Party",
    place: "Room C",
    capacity: 120000,
    assistance: 110000,
    price: 54,
    __v: 0,
  },
  {
    _id: "639c723c992482e5f2834bf3",
    name: "Halloween Night",
    image: "https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
    date: "2023-02-12",
    description: "Come with your scariest costume and win incredible prizes.",
    category: "Costume Party",
    place: "Room C",
    capacity: 12000,
    estimate: 9000,
    price: 12,
    __v: 0,
  },
  {
    _id: "639c723c992482e5f2834bf5",
    name: "Metallica in concert",
    image: "https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
    date: "2023-01-22",
    description: "The only concert of the most emblematic band in the world.",
    category: "Music Concert",
    place: "Room A",
    capacity: 138000,
    estimate: 138000,
    price: 150,
    __v: 0,
  },
  {
    _id: "639c723c992482e5f2834bf7",
    name: "Electronic Fest",
    image: "https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
    date: "2022-01-22",
    description:
      "The best national and international DJs gathered in one place.",
    category: "Music Concert",
    place: "Room A",
    capacity: 138000,
    assistance: 110300,
    price: 250,
    __v: 0,
  },
  {
    _id: "639c723d992482e5f2834bf9",
    name: "10K for life",
    image: "https://i.postimg.cc/fyLqZY9K/10-K-for-life.jpg",
    date: "2022-03-01",
    description: "Come and exercise, improve your health and lifestyle.",
    category: "Race",
    place: "Soccer field",
    capacity: 30000,
    assistance: 25698,
    price: 3,
    __v: 0,
  },
  {
    _id: "639c723d992482e5f2834bfb",
    name: "15K NY",
    image: "https://i.postimg.cc/zv67r65z/15kny.jpg",
    date: "2023-03-01",
    description:
      "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
    category: "Race",
    place: "New York",
    capacity: 3000000,
    price: 3,
    __v: 0,
    estimate: 2569800,
  },
  {
    _id: "639c723d992482e5f2834bfd",
    name: "School's book fair",
    image: "https://i.postimg.cc/Sst763n6/book1.jpg",
    date: "2023-10-15",
    description: "Bring your unused school book and take the one you need.",
    category: "Book Exchange",
    place: "Room D1",
    capacity: 150000,
    estimate: 123286,
    price: 1,
    __v: 0,
  },
  {
    _id: "639c723d992482e5f2834bff",
    name: "Just for your kitchen",
    image: "https://i.postimg.cc/05FhxHVK/book4.jpg",
    date: "2022-11-09",
    description:
      "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
    category: "Book Exchange",
    place: "Room D6",
    capacity: 130000,
    assistance: 90000,
    price: 100,
    __v: 0,
  },
  {
    _id: "639c723d992482e5f2834c01",
    name: "Batman",
    image: "https://i.postimg.cc/vH52y81C/cinema4.jpg",
    date: "2022-3-11",
    description: "Come see Batman fight crime in Gotham City.",
    category: "Cinema",
    place: "Room D1",
    capacity: 11000,
    assistance: 9300,
    price: 225,
    __v: 0,
  },
  {
    _id: "639c723d992482e5f2834c03",
    name: "Avengers",
    image: "https://i.postimg.cc/T3C92KTN/scale.jpg",
    date: "2023-10-15",
    description:
      "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
    category: "Cinema",
    place: "Room D1",
    capacity: 9000,
    estimate: 9000,
    price: 250,
    __v: 0,
  },
];
let categoriasExistentesDeCheckbox = [];

let arraycheck = [];

let ultimaBusquedaIndex = -1;

//Usamos el title para saber en que sitio estamos y segun eso filtrar los divs y cards que traermos
let title = document.getElementById("title");
//La fecha que queremos para saber si la fecha de el evento paso o esta por venir
let fechaActual = new Date("2023-01-01");

//Traer Todos los divs cards,models y checkbox cuando termina de cargar la pagina
document.addEventListener("DOMContentLoaded", function () {
  //Se fija que el title sea igual a home y agrega los divs sin filtrar
  if (title.innerHTML.trim() === "Home") {
    for (let i = 0; i < eventos.length; i++) {
      agregarDivCartaYModal(i);
    }
    // Mostrar solo los eventos futuros en la página "Upcoming events" y los checks
  } else if (title.innerHTML.trim() === "Upcoming events") {
    for (let i = 0; i < eventos.length; i++) {
      agregarCartaModalCheckboxSiFechaEsMayor(i);
    }
    // Mostrar solo los eventos pasados en la página "Past events" y los checks
  } else if (title.innerHTML.trim() === "Past events") {
    for (let i = 0; i < eventos.length; i++) {
      agregarCartaModalCheckboxSiFechaEsMenor(i);
    }
  } // Mostrar un mensaje de error si el título no coincide con ninguna página
  else {
    console.log("cara troste no funciono" + title.innerHTML);
  }

  agregarListenersACheckbox();

  // Eliminar elementos innecesarios
  eliminarElDivCartita();
  eliminarElDivCheckbox();
  console.log(arraycheck);
  realizarBusqueda();
});

//funciones cards modal y checkbox
// Función que agrega una carta con modal y checkbox si la fecha del evento es menor que la fecha actual
function agregarCartaModalCheckboxSiFechaEsMenor(i) {
  if (new Date(eventos[i].date) < fechaActual) {
    agregarDivCartaYModal(i);
  }
}

// Función que agrega una carta con modal y checkbox si la fecha del evento es mayor que la fecha actual
function agregarCartaModalCheckboxSiFechaEsMayor(i) {
  if (new Date(eventos[i].date) > fechaActual) {
    agregarDivCartaYModal(i);
  }
}

// Función que agrega una carta con modal y checkbox
function agregarDivCartaYModal(i) {
  agregarDivCarta(i);
  agregarModal(i);
  agregarCheckbox(i);
}

// Función que agrega una carta al contenedor de la galería
function agregarDivCarta(i) {
  let contenedor = document.getElementById("contenedor-galeria");
  let cartita = document.getElementById("cartita");

  let nuevoDiv = document.createElement("div");
  nuevoDiv.className = cartita.className; // Copia las clases del elemento cartita
  nuevoDiv.innerHTML = cartita.innerHTML; // Copia el contenido del elemento cartita
  nuevoDiv.setAttribute("data-category", eventos[i].category);

  let imgElement = nuevoDiv.querySelector("img");
  imgElement.setAttribute("src", eventos[i].image);

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

// Función que agrega un checkbox si la categoría del evento no existe en la lista
function agregarCheckbox(i) {
  if (!categoriasExistentesDeCheckbox.includes(eventos[i].category)) {
    let contenedor = document.getElementById("form-filter");
    let checkbox = document.getElementById("checkbox0");

    let nuevoDiv = document.createElement("div");
    nuevoDiv.className = checkbox.className;
    nuevoDiv.innerHTML = checkbox.innerHTML;

    let textoCategory = nuevoDiv.querySelector("label");
    textoCategory.textContent = eventos[i].category;

    let valueCategory = nuevoDiv.querySelector("input");
    valueCategory.setAttribute("value", eventos[i].category);
    categoriasExistentesDeCheckbox.push(eventos[i].category);

    contenedor.appendChild(nuevoDiv);
  }
}

// Función que agrega un modal al cuerpo del documento
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

// Función que elimina el div del checkbox
function eliminarElDivCheckbox() {
  let checkbox = document.getElementById("checkbox0");
  checkbox.remove();
}

// Función que elimina el div de la carta
function eliminarElDivCartita() {
  let cartita = document.getElementById("cartita");
  cartita.remove();
}

//funciones checkbox
function agregarListenersACheckbox() {
  let checkbox = document.querySelectorAll('input[type="checkbox"]');

  checkbox.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      let checkboxStatus;
      if (this.checked) {
        arraycheck.push(this.value.toLowerCase());
        mostrarCartas();
        ocultarCartas();
      } else if (!this.check) {
        arraycheck = arraycheck.filter(
          (checkboxTild) => checkboxTild !== this.value.toLowerCase()
        );
        mostrarCartas();
        ocultarCartas();
      }
    });
  });
}

function mostrarCartas() {
  let elementosDiv = document.querySelectorAll(".ultimate-test");

  elementosDiv.forEach((div) => {
    let categoria = div.getAttribute("data-category");
    if (arraycheck.includes(categoria.toLowerCase())) {
      div.setAttribute("style", "display: block !important;");
    }
  });
}

function ocultarCartas() {
  let elementosDiv = document.querySelectorAll(".ultimate-test");

  elementosDiv.forEach((div) => {
    let categoria = div.getAttribute("data-category");
    if (!arraycheck.includes(categoria.toLowerCase())) {
      div.setAttribute("style", "display: none !important;");
    }
  });

  if (arraycheck.length == 0) {
    elementosDiv.forEach((div) => {
      div.setAttribute("style", "display: block !important;");
    });
  }
}

function realizarBusqueda() {
  let inputBusqueda = document.getElementById("buscarInput");
  let botonBuscar = document.getElementById("buscarButton");

  botonBuscar.addEventListener("click", function () {
    let valorBusqueda = inputBusqueda.value;

    if (
      valorBusqueda.trim() !== "" &&
      !arraycheck.includes(valorBusqueda.trim().toLowerCase())
    ) {
      if (ultimaBusquedaIndex > -1) {
        arraycheck.splice(ultimaBusquedaIndex, 1);
      }
      arraycheck.push(valorBusqueda.trim().toLowerCase());
      inputBusqueda.value = "";
      ultimaBusquedaIndex = arraycheck.indexOf(valorBusqueda);
    }
    mostrarCartas();
    ocultarCartas();
  });
}