function calcularCotizacion() {
  var nombre = document.getElementById("nombre").value;
  var correo = document.getElementById("correo").value;

  var financiamiento = "";
  if(document.getElementById("contado").checked) financiamiento = "Contado";
  if(document.getElementById("credito").checked) financiamiento = "Crédito";

  var marca = document.getElementById("marca").value;

  var extras = "";
  if(document.getElementById("aire").checked) extras += "Aire acondicionado, ";
  if(document.getElementById("gps").checked) extras += "GPS, ";
  if(document.getElementById("seguro").checked) extras += "Incluir seguro, ";
  if(document.getElementById("quemacocos").checked) extras += "Quemacocos, ";
  if(document.getElementById("camaraT").checked) extras += "Cámara trasera, ";
  if(document.getElementById("camaraF").checked) extras += "Cámara frontal, ";
  if(extras === "") extras = "No seleccionaste extras";

  var resultado = 
  "Nombre: " + nombre + "<br>" +
  "Correo: " + correo + "<br>" +
  "Financiamiento: " + financiamiento + "<br>" +
  "Marca: " + marca + "<br>" +
  "Extras: " + extras;

  document.getElementById("resultadoCotizacion").innerHTML = resultado;
}
