let existingCheckboxCategories = [];
let selectedCategories = [];
let lastSearchIndex = -1;

async function fetchDataFromApi() {
  let urlAPi = "https://mindhub-xj03.onrender.com/api/amazing";
  try {
    const response = await fetch(urlAPi);
    return (data = await response.json());
  } catch (error) {
    console.error("Error en fetchDataFromApi:", error);
    throw error;
  }
}

async function innitPage(firstFunction, secondFunction) {
  try {
    const data = await fetchDataFromApi();

    if (secondFunction == null) {
      if (firstFunction.length === 0) {
        firstFunction();
      }
    } else {
      if (firstFunction.length === 0) {
        firstFunction();
      } else {
        console.error(
          "La función requiere argumentos que no se proporcionaron."
        );
      }
      secondFunction();
    }
  } catch (error) {
    console.error("Error en innitPage:", error);
  }
}

function createCard(indexDataEvent) {
  const galleryContainer = document.getElementById("contenedor-galeria");
  const cardData = data.events[indexDataEvent];

  // Crear el elemento principal de la carta
  const cardElement = createCardElement(cardData);
  galleryContainer.appendChild(cardElement);
}

function createCardElement(cardData) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add(
    "col-md-3",
    "mb-2",
    "mx-5",
    "d-flex",
    "flex-fill",
    "ultimate-test"
  );
  cardDiv.setAttribute("data-category", cardData.category);
  cardDiv.style.display = "block";

  const cardArticle = createCardArticle(cardData);
  cardDiv.appendChild(cardArticle);

  return cardDiv;
}

function createCardArticle(cardData) {
  const cardArticle = document.createElement("article");
  cardArticle.classList.add("card", "container-fluid", "px-0");

  const cardImage = createCardImage(cardData);
  const cardBody = createCardBody(cardData);

  cardArticle.appendChild(cardImage);
  cardArticle.appendChild(cardBody);

  return cardArticle;
}

function createCardImage(cardData) {
  const imageElement = document.createElement("img");
  imageElement.src = cardData.image;
  imageElement.classList.add("card-img-top");
  imageElement.alt = "Image " + cardData._id;
  return imageElement;
}

function createCardBody(cardData) {
  const cardBodyElement = document.createElement("div");
  cardBodyElement.classList.add(
    "card-body",
    "d-flex",
    "flex-column",
    "align-items-center",
    "justify-content-between"
  );

  const innerDiv1 = createInnerCardBodyDiv1(cardData);
  const innerDiv2 = createInnerCardBodyDiv2(cardData);

  cardBodyElement.appendChild(innerDiv1);
  cardBodyElement.appendChild(innerDiv2);

  return cardBodyElement;
}

function createInnerCardBodyDiv1(cardData) {
  const innerDiv1 = document.createElement("div");
  innerDiv1.classList.add("d-flex", "flex-column", "align-items-center");

  const titleH2 = createCardTitleH2(cardData);
  const categoryParagraph = createCategoryParagraph(cardData);

  innerDiv1.appendChild(titleH2);
  innerDiv1.appendChild(categoryParagraph);

  return innerDiv1;
}

function createCardTitleH2(cardData) {
  const titleElement = document.createElement("h2");
  titleElement.classList.add("card-title", "text-center");
  titleElement.textContent = cardData.name;

  return titleElement;
}

function createCategoryParagraph(cardData) {
  const paragraphElement = document.createElement("p");
  paragraphElement.textContent = cardData.category;
  return paragraphElement;
}

function createInnerCardBodyDiv2(cardData) {
  const innerDiv2 = document.createElement("div");
  innerDiv2.classList.add(
    "d-flex",
    "justify-content-between",
    "align-items-center",
    "w-100"
  );

  const priceH3 = createPriceH3(cardData);
  const detailsButton = createDetailsButtonWithListener(cardData);

  innerDiv2.appendChild(priceH3);
  innerDiv2.appendChild(detailsButton);

  return innerDiv2;
}

function createPriceH3(cardData) {
  const h3Element = document.createElement("h3");
  h3Element.classList.add("col-6");
  h3Element.textContent = cardData.price;
  return h3Element;
}

function createDetailsButtonWithListener(cardData) {
  const buttonElement = document.createElement("button");
  buttonElement.type = "button";
  buttonElement.classList.add("btn", "btn-primary", "col-6");
  buttonElement.textContent = "Details";

  const linkURL = `./details.html?id=${cardData._id}`;

  buttonElement.addEventListener("click", () => {
    window.location.href = linkURL;
  });

  return buttonElement;
}

function addCheckbox(i) {
  if (!existingCheckboxCategories.includes(data.events[i].category)) {
    let container = document.getElementById("form-filter");
    const checkboxDiv = document.createElement("div");
    checkboxDiv.classList.add(
      "form-check",
      "form-check-inline",
      "col-sm-12",
      "col-12",
      "col-md-2",
      "col-lg-2",
      "col-xl-2",
      "col-xxl-2",
      "col-8",
      "p-0",
      "m-0",
      "align-self-start",
      "align-self-md-center"
    );

    const inputElement = document.createElement("input");
    inputElement.classList.add("form-check-input", "mr-2");
    inputElement.type = "checkbox";
    inputElement.value = data.events[i].category;
    inputElement.id = "inlineCheckbox" + i; // Asignamos un ID único

    existingCheckboxCategories.push(data.events[i].category);

    const labelElement = document.createElement("label");
    labelElement.classList.add(
      "form-check-label",
      "fontCheckBox",
      "w-25",
      "text-white-50",
      "fw-bolder",
      "py-1"
    );
    labelElement.textContent = data.events[i].category;
    labelElement.setAttribute("for", "inlineCheckbox" + i); // Asignamos el mismo ID al atributo 'for'

    checkboxDiv.appendChild(inputElement);
    checkboxDiv.appendChild(labelElement);
    container.appendChild(checkboxDiv);
  }
}

function addCardsAndCheckbox(i) {
  createCard(i);
  addCheckbox(i);
}

function addAllCardsAndCheckboxes() {
  for (i = 0; i < data.events.length; i++) {
    addCardsAndCheckbox(i);
  }
}

function addCardsAndCheckboxesForUpcomingEvents() {
  for (i = 0; i < data.events.length; i++) {
    if (new Date(data.currentDate) < new Date(data.events[i].date)) {
      addCardsAndCheckbox(i);
    }
  }
}

function addCardsAndCheckboxesForPastEvents() {
  for (i = 0; i < data.events.length; i++) {
    if (new Date(data.currentDate) > new Date(data.events[i].date)) {
      addCardsAndCheckbox(i);
    }
  }
}

function addCheckboxListeners() {
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      let checkboxStatus;
      if (this.checked) {
        selectedCategories.push(this.value.toLowerCase());
        showCards();
        hideCards();
      } else if (!this.check) {
        selectedCategories = selectedCategories.filter(
          (category) => category !== this.value.toLowerCase()
        );
        showCards();
        hideCards();
      }
    });
  });
}

function performSearch() {
  let searchInput = document.getElementById("searchInput");
  let searchButton = document.getElementById("searchButton");
  let searchResultMessage = document.getElementById("searchInput");

  searchButton.addEventListener("click", function () {
    let divs = document.querySelectorAll(".ultimate-test");
    let searchValue = searchInput.value.toLowerCase();
    let resultsFound = false;

    divs.forEach((element) => {
      let h2Element = element.querySelector("h2");
      let h2Text = h2Element.textContent.toLowerCase();

      if (!h2Text.includes(searchValue)) {
        element.setAttribute("style", "display: none !important;");
        searchResultMessage.setAttribute("placeholder", "Search");
        searchResultMessage.classList.remove("bg-warning");
      } else {
        resultsFound = true;
      }
    });
    searchInput.value = "";
    lastSearchIndex = selectedCategories.indexOf(searchValue);
    if (resultsFound) {
      searchResultMessage.textContent = "";
    } else {
      searchResultMessage.setAttribute("placeholder", "No results.");
      searchResultMessage.classList.add("bg-warning");

      showAllCards();
    }
  });
}

function showAllCards() {
  let divElements = document.querySelectorAll(".ultimate-test");
  if (selectedCategories.length == 0) {
    divElements.forEach((div) => {
      div.setAttribute("style", "");
    });
  }
}

function showCards() {
  let divElements = document.querySelectorAll(".ultimate-test");
  divElements.forEach((div) => {
    let category = div.getAttribute("data-category");
    if (selectedCategories.includes(category.toLowerCase())) {
      div.setAttribute("style", "");
    }
  });
}

function hideCards() {
  let divElements = document.querySelectorAll(".ultimate-test");
  divElements.forEach((div) => {
    let category = div.getAttribute("data-category");
    if (!selectedCategories.includes(category.toLowerCase())) {
      div.setAttribute("style", "display: none !important;");
    }
  });
  showAllCards();
}

function clearFilters() {
  let clearFiltersButton = document.getElementById("clearFiltersButton");
  clearFiltersButton.addEventListener("click", function () {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
      checkbox.checked = false;
    });
    selectedCategories = [];
    showAllCards();
  });
}

async function crearCarta(id) {
  let data = await fetchDataFromApi();

  // Obtener el contenedor donde se agregarán las cartas de evento
  const divContainer = document.getElementById("contenedor-galeria");

  // Crear el elemento div principal para la carta
  const divElement = document.createElement("div");
  divElement.classList.add("col-md-6", "mb-4", "mx-auto"); // Centrar horizontalmente

  // Establecer el atributo 'data-category' del evento en el div principal
  divElement.setAttribute("data-category", data.events[id].category);

  // Crear el elemento 'article' con la clase "card"
  const articleElement = document.createElement("article");
  articleElement.classList.add("card");

  // Crear el elemento de imagen
  const imgElement = document.createElement("img");
  imgElement.src = data.events[id].image;
  imgElement.classList.add("card-img-top");
  imgElement.alt = "Event Image";

  // Crear el elemento div con la clase "card-body"
  const cardBodyElement = document.createElement("div");
  cardBodyElement.classList.add("card-body", "text-center"); // Centrar verticalmente

  // Crear el elemento título (h2)
  const titleElement = document.createElement("h2");
  titleElement.classList.add("card-title");
  titleElement.textContent = data.events[id].name;

  // Crear un párrafo para mostrar el precio
  const priceParagraph = document.createElement("p");
  priceParagraph.classList.add("card-text");
  priceParagraph.textContent = "Price: $" + data.events[id].price; // Mostrar el precio

  // Crear un párrafo para mostrar la fecha
  const dateParagraph = document.createElement("p");
  dateParagraph.classList.add("card-text");
  dateParagraph.textContent = "Date: " + data.events[id].date;

  // Crear un párrafo para mostrar la descripción
  const descriptionParagraph = document.createElement("p");
  descriptionParagraph.classList.add("card-text");
  descriptionParagraph.textContent =
    "Description: " + data.events[id].description;

  // Crear un párrafo para mostrar el lugar
  const placeParagraph = document.createElement("p");
  placeParagraph.classList.add("card-text");
  placeParagraph.textContent = "Place: " + data.events[id].place;

  // Crear un párrafo para mostrar la capacidad
  const capacityParagraph = document.createElement("p");
  capacityParagraph.classList.add("card-text");
  capacityParagraph.textContent = "Capacity: " + data.events[id].capacity;

  // Agregar los elementos en la estructura correcta
  cardBodyElement.appendChild(titleElement);
  cardBodyElement.appendChild(priceParagraph); // Agregar el precio
  cardBodyElement.appendChild(dateParagraph);
  cardBodyElement.appendChild(descriptionParagraph);
  cardBodyElement.appendChild(placeParagraph);
  cardBodyElement.appendChild(capacityParagraph);

  articleElement.appendChild(imgElement);
  articleElement.appendChild(cardBodyElement);

  divElement.appendChild(articleElement);

  // Agregar el div principal al contenedor de la galería
  divContainer.appendChild(divElement);
}
