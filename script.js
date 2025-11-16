document.getElementById("formCotizacion").onsubmit = function () {

    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var financiamiento = document.querySelector("input[name='financiamiento']:checked").value;
    var marca = document.getElementById("marca").value;

    var extrasTexto = "";
}
    if (document.getElementById("aire").checked) extrasTexto += "- Aire acondicionado<br>";
    if (document.getElementById("gps").checked) extrasTexto += "- GPS<br>";
    if (document.getElementById("seguro").checked) extrasTexto += "- Incluir seguro<br>";
    if (document.getElementById("quemacocos").checked) extrasTexto += "- Quemacocos<br>";
    if (document.getElementById("camaraT").checked) extrasTexto += "- Cámara trasera<br>";
    if (document.getElementById("camaraF").checked) extrasTexto += "- Cámara frontal<br>";

    if (extrasTexto === "") {
        extrasTexto = "(No se seleccionaron extras)";
}
