function abrir_modal() {
    let cerrar = document.querySelector("#modal-pelicula");

    cerrar.classList.add("active")
}

function cerrar_modal() {
    let cerrar = document.getElementById("modal-pelicula");

    cerrar.classList.remove("active")
}

function panel_lateral() {
    let lateral = document.getElementById("panel-lateral")

    lateral.classList.toggle("active")
}