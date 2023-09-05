const data = {
  currentDate: "2023-01-01",
  events: [
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
  ],
};
// Este array almacena las categorías de eventos para las cuales ya se ha agregado un checkbox en el formulario de filtros.
let categoriasExistentesDeCheckbox = [];

// Este array almacena las categorías seleccionadas en los checkboxes para el filtrado de cartas de eventos.
let categoriasSeleccionadas = [];
// Esta variable almacena el índice de la última búsqueda realizada para la funcionalidad de búsqueda.
let indiceUltimaBusqueda = -1;

// Esta función crea y agrega elementos para una carta de evento en una galería.
// Recibe un índice 'i' para acceder a los datos del evento en 'data.events[i]'.
function crearCarta(i) {
  // Obtener el contenedor donde se agregarán las cartas de evento
  const divContainer = document.getElementById("contenedor-galeria");

  // Crear el elemento div principal para la carta
  const divElement = document.createElement("div");
  divElement.classList.add(
    "col-md-3",
    "mb-2",
    "mx-5",
    "d-flex",
    "flex-fill",
    "ultimate-test"
  );

  // Establecer el atributo 'data-category' del evento en el div principal
  divElement.setAttribute("data-category", data.events[i].category);
  divElement.style.display = "block";

  // Crear el elemento 'article' con la clase "card"
  const articleElement = document.createElement("article");
  articleElement.classList.add("card");

  // Crear el elemento de imagen
  const imgElement = document.createElement("img");
  imgElement.src = data.events[i].image;
  imgElement.classList.add("card-img-top");
  imgElement.alt = "Image 1";

  // Crear el elemento div con la clase "card-body"
  const cardBodyElement = document.createElement("div");
  cardBodyElement.classList.add(
    "card-body",
    "d-flex",
    "flex-column",
    "align-items-center",
    "justify-content-between"
  );

  // Crear el primer div interno con las clases "d-flex" y "flex-column"
  const innerDiv1 = document.createElement("div");
  innerDiv1.classList.add("d-flex", "flex-column", "align-items-center");

  // Crear el elemento título (h2) y el párrafo dentro del primer div interno
  const titleElement = document.createElement("h2");
  titleElement.classList.add("card-title", "text-center");
  titleElement.textContent = data.events[i].name;

  const paragraphElement = document.createElement("p");
  paragraphElement.textContent = data.events[i].category;

  // Crear el segundo div interno con las clases "d-flex", "justify-content-between" y "align-items-center"
  const innerDiv2 = document.createElement("div");
  innerDiv2.classList.add(
    "d-flex",
    "justify-content-between",
    "align-items-center",
    "w-100"
  );

  // Crear el elemento h3 y el botón dentro del segundo div interno
  const h3Element = document.createElement("h3");
  h3Element.classList.add("col-6");
  h3Element.textContent = data.events[i].price;

  const buttonElement = document.createElement("button");
  buttonElement.type = "button";
  buttonElement.classList.add("btn", "btn-primary", "col-6");
  buttonElement.textContent = "Details";
  
  const linkURL = "./details.html?id=" + data.events[i]._id;
  
  buttonElement.addEventListener("click", function() {
    window.location.href = linkURL;
  });

  // Agregar los elementos en la estructura correcta
  innerDiv1.appendChild(titleElement);
  innerDiv1.appendChild(paragraphElement);

  innerDiv2.appendChild(h3Element);
  innerDiv2.appendChild(buttonElement);

  cardBodyElement.appendChild(innerDiv1);
  cardBodyElement.appendChild(innerDiv2);

  articleElement.appendChild(imgElement);
  articleElement.appendChild(cardBodyElement);

  divElement.appendChild(articleElement);

  // Agregar el div principal al contenedor de la galería
  divContainer.appendChild(divElement);
}

// Esta función agrega un checkbox para una categoría de evento si aún no está presente en la lista de categorías existentes.
// Recibe un índice 'i' para acceder a los datos del evento en 'data.events[i]'.
function agregarCheckbox(i) {
  // Verificar si la categoría del evento ya existe en la lista de categorías existentes de checkboxes.
  if (!categoriasExistentesDeCheckbox.includes(data.events[i].category)) {
    // Obtener el contenedor donde se agregará el formulario de filtros
    let contenedor = document.getElementById("form-filter");

    // Crear el elemento div para el checkbox con sus clases
    const checkboxDiv = document.createElement("div");
    checkboxDiv.classList.add(
      "form-check",
      "form-check-inline",
      "col-md-3",
      "col-lg-3",
      "col-xl-3",
      "col-xxl-3",
      "col-8",
      "p-0",
      "m-0",
      "align-self-start",
      "align-self-md-center"
    );

    // Crear el elemento input (checkbox)
    const inputElement = document.createElement("input");
    inputElement.classList.add("form-check-input", "mr-2");
    inputElement.type = "checkbox";
    inputElement.value = data.events[i].category;

    // Agregar la categoría del evento a la lista de categorías existentes de checkboxes
    categoriasExistentesDeCheckbox.push(data.events[i].category);

    // Crear el elemento label
    const labelElement = document.createElement("label");
    labelElement.classList.add(
      "form-check-label",
      "fs-4",
      "w-25",
      "text-white-50",
      "fw-bolder"
    );
    labelElement.textContent = data.events[i].category;
    labelElement.setAttribute("for", "inlineCheckbox" + [i]);

    // Agregar elementos al div del checkbox
    checkboxDiv.appendChild(inputElement);
    checkboxDiv.appendChild(labelElement);

    // Agregar el div del checkbox al contenedor del formulario
    contenedor.appendChild(checkboxDiv);
  }
}

// Esta función ejecuta las funciones 'crearCarta' y 'agregarCheckbox' para mostrar una carta de evento y agregar su checkbox.
function agregarCardsYCheckbox(i) {
  crearCarta(i);
  agregarCheckbox(i);
}

// Esta función agrega las cartas y los checkboxes para todos los eventos en 'data.events'.
function agregarTodasLasCardsYChecks() {
  for (i = 0; i < data.events.length; i++) {
    agregarCardsYCheckbox(i);
  }
}

// Esta función agrega cartas y checkboxes solo para los eventos que aún no han ocurrido.
function agregarCardsYChecksDeProximosEventos() {
  for (i = 0; i < data.events.length; i++) {
    if (new Date(data.currentDate) > new Date(data.events[i].date)) {
      agregarCardsYCheckbox(i);
    }
  }
}

// Esta función agrega cartas y checkboxes solo para los eventos que ya han ocurrido.
function agregarCardsYChecksDeEventosPasados() {
  for (i = 0; i < data.events.length; i++) {
    if (new Date(data.currentDate) < new Date(data.events[i].date)) {
      agregarCardsYCheckbox(i);
    }
  }
}

// Esta función agrega event listeners a los checkboxes para controlar la visibilidad de las cartas de eventos según las categorías seleccionadas.
function agregarListenersACheckbox() {
  // Obtener todos los elementos checkbox
  let checkbox = document.querySelectorAll('input[type="checkbox"]');

  // Iterar a través de cada checkbox
  checkbox.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      // Determinar el estado del checkbox
      let checkboxStatus;
      if (this.checked) {
        // Agregar la categoría seleccionada al array 'categoriasSeleccionadas'
        categoriasSeleccionadas.push(this.value.toLowerCase());
        // Mostrar y ocultar cartas según las categorías seleccionadas
        mostrarCartas();
        ocultarCartas();
      } else if (!this.check) {
        // Filtrar y eliminar la categoría no seleccionada del array 'categoriasSeleccionadas'
        categoriasSeleccionadas = categoriasSeleccionadas.filter(
          (categoria) => categoria !== this.value.toLowerCase()
        );
        // Mostrar y ocultar cartas según las categorías seleccionadas
        mostrarCartas();
        ocultarCartas();
      }
    });
  });
}

// Esta función realiza una búsqueda de eventos y oculta las cartas que no coinciden con el término de búsqueda.
function realizarBusqueda() {
  // Obtener el elemento de entrada de búsqueda y el botón de búsqueda
  let inputBusqueda = document.getElementById("buscarInput");
  let botonBuscar = document.getElementById("buscarButton");
  let divs = document.querySelectorAll(".ultimate-test");

  // Agregar un event listener al botón de búsqueda
  botonBuscar.addEventListener("click", function () {
    // Obtener el valor de búsqueda
    let valorBusqueda = inputBusqueda.value.toLowerCase();

    // Verificar si el valor de búsqueda no está vacío y no está en las categorías seleccionadas
    if (valorBusqueda.trim() !== "") {
      // Iterar a través de los elementos div
      divs.forEach((element) => {
        // Obtener el elemento h2 dentro del div
        let h2Element = element.querySelector("h2");
        let h2Text = h2Element.textContent.toLowerCase();

        // Ocultar la carta si no coincide con el término de búsqueda
        if (!h2Text.includes(valorBusqueda)) {
          element.setAttribute("style", "display: none !important;");
        }
      });

      // Restablecer el valor del campo de búsqueda
      inputBusqueda.value = "";

      // Actualizar el índice de la última búsqueda
      indiceUltimaBusqueda = categoriasSeleccionadas.indexOf(valorBusqueda);
    }
  });
}

//Si el array categoriasSeleccionadas esta vacio muestra todas las cartas
function mostrarTodasLasCartas() {
  let elementosDiv = document.querySelectorAll(".ultimate-test");
  if (categoriasSeleccionadas.length == 0) {
    elementosDiv.forEach((div) => {
      div.setAttribute("style", "");
    });
  }
}

// Esta función muestra las cartas de eventos según las categorías seleccionadas en el array 'categoriasSeleccionadas'.
function mostrarCartas() {
  let elementosDiv = document.querySelectorAll(".ultimate-test");

  elementosDiv.forEach((div) => {
    let categoria = div.getAttribute("data-category");
    if (categoriasSeleccionadas.includes(categoria.toLowerCase())) {
      div.setAttribute("style", "");
    }
  });
}

// Esta función oculta las cartas de eventos según las categorías seleccionadas en el array 'categoriasSeleccionadas'.
// Si no se selecciona ninguna categoría, muestra todas las cartas.
function ocultarCartas() {
  let elementosDiv = document.querySelectorAll(".ultimate-test");

  elementosDiv.forEach((div) => {
    let categoria = div.getAttribute("data-category");
    if (!categoriasSeleccionadas.includes(categoria.toLowerCase())) {
      div.setAttribute("style", "display: none !important;");
    }
  });

  //Si el array categoriasSeleccionadas esta vacio muestra todas las cartas
  mostrarTodasLasCartas();
}

// Esta función limpia los filtros seleccionados al hacer clic en el botón "Limpiar Filtros".
function limpiarFiltros() {
  // Obtener el botón "Limpiar Filtros"
  let botonFiltros = document.getElementById("limpiarFiltrosButton");

  // Agregar un event listener al botón "Limpiar Filtros"
  botonFiltros.addEventListener("click", function () {
    // Obtener todos los checkboxes
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');

    // Desmarcar todos los checkboxes
    checkboxes.forEach(function (checkbox) {
      checkbox.checked = false;
    });

    // Vaciar el array de categorías seleccionadas es decir vaciar filtros
    categoriasSeleccionadas = [];

    // Mostrar todas las cartas solo si no hay filtros
    mostrarTodasLasCartas();
  });
}
