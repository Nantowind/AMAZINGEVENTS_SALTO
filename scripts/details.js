const queryString = location.search;

const param = new URLSearchParams(queryString);

const id = param.get("id");

innitPage(crearCarta(id));