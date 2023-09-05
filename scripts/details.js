const queryString = location.search;

const param = new URLSearchParams(queryString);

const id = param.get("id");

let eventData = data.events.find((card) => id === card._id);

function crearCarta(event) {
    // Obtener el contenedor donde se agregarán las cartas de evento
    const divContainer = document.getElementById("contenedor-galeria");
  
    // Crear el elemento div principal para la carta
    const divElement = document.createElement("div");
    divElement.classList.add("col-md-6", "mb-4", "mx-auto"); // Centrar horizontalmente
  
    // Establecer el atributo 'data-category' del evento en el div principal
    divElement.setAttribute("data-category", event.category);
  
    // Crear el elemento 'article' con la clase "card"
    const articleElement = document.createElement("article");
    articleElement.classList.add("card");
  
    // Crear el elemento de imagen
    const imgElement = document.createElement("img");
    imgElement.src = event.image;
    imgElement.classList.add("card-img-top");
    imgElement.alt = "Event Image";
  
    // Crear el elemento div con la clase "card-body"
    const cardBodyElement = document.createElement("div");
    cardBodyElement.classList.add("card-body", "text-center"); // Centrar verticalmente
  
    // Crear el elemento título (h2)
    const titleElement = document.createElement("h2");
    titleElement.classList.add("card-title");
    titleElement.textContent = event.name;
  
    // Crear un párrafo para mostrar el precio
    const priceParagraph = document.createElement("p");
    priceParagraph.classList.add("card-text");
    priceParagraph.textContent = "Price: $" + event.price; // Mostrar el precio
  
    // Crear un párrafo para mostrar la fecha
    const dateParagraph = document.createElement("p");
    dateParagraph.classList.add("card-text");
    dateParagraph.textContent = "Date: " + event.date;
  
    // Crear un párrafo para mostrar la descripción
    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.classList.add("card-text");
    descriptionParagraph.textContent = "Description: " + event.description;
  
    // Crear un párrafo para mostrar el lugar
    const placeParagraph = document.createElement("p");
    placeParagraph.classList.add("card-text");
    placeParagraph.textContent = "Place: " + event.place;
  
    // Crear un párrafo para mostrar la capacidad
    const capacityParagraph = document.createElement("p");
    capacityParagraph.classList.add("card-text");
    capacityParagraph.textContent = "Capacity: " + event.capacity;
  
    // Crear un párrafo para mostrar la asistencia
    const assistanceParagraph = document.createElement("p");
    assistanceParagraph.classList.add("card-text");
    assistanceParagraph.textContent = "Assistance: " + event.assistance;
  
    // Agregar los elementos en la estructura correcta
    cardBodyElement.appendChild(titleElement);
    cardBodyElement.appendChild(priceParagraph); // Agregar el precio
    cardBodyElement.appendChild(dateParagraph);
    cardBodyElement.appendChild(descriptionParagraph);
    cardBodyElement.appendChild(placeParagraph);
    cardBodyElement.appendChild(capacityParagraph);
    cardBodyElement.appendChild(assistanceParagraph);
  
    articleElement.appendChild(imgElement);
    articleElement.appendChild(cardBodyElement);
  
    divElement.appendChild(articleElement);
  
    // Agregar el div principal al contenedor de la galería
    divContainer.appendChild(divElement);
  }
  
  
crearCarta(eventData);
