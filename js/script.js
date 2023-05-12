
    
var copiar = document.getElementById("btn-copiar");
var encriptar = document.getElementById("btn-encriptar");
var desencriptar = document.getElementById("btn-desencriptar");

encriptar.addEventListener("click", function() {
    let mensaje = document.getElementById("mensaje");
    let texto = document.getElementById("texto").value;
    
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("mensaje-ayuda");
    let munheco = document.getElementById("munheco");

  let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

  if (texto.length !== 0) {
    munheco.style.display = "none";
    parrafo.style.display = "none";
    tituloMensaje.style.display = "none";

    mensaje.style.display = "flex";
    mensaje.style.position = "absolute";
    copiar.style.display = "flex";
    mensaje.value = textoCifrado;
   
  } else {
    munheco.style.display = "flex";
    mensaje.style.display = "none";
    tituloMensaje.style.display = "flex";
    parrafo.style.display = "flex";
    swal("Upss!!","Debes ingresar algún texto","warning");
  }
});

desencriptar.addEventListener("click",function(){
    let mensaje = document.getElementById("mensaje");
    let texto = document.getElementById("texto").value;
    
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("mensaje-ayuda");
    let munheco = document.getElementById("munheco");

  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  if (texto.length !== 0) {
    munheco.style.display = "none";
    parrafo.style.display = "none";
    tituloMensaje.style.display = "none";

    mensaje.style.display = "flex";
    mensaje.style.position = "absolute";
    copiar.style.display = "flex";
    mensaje.value = textoCifrado;
   
  } else {
    munheco.style.display = "flex";
    mensaje.style.display = "none";
    tituloMensaje.style.display = "flex";
    parrafo.style.display = "flex";
    alert("Debes ingresar algún texto");}
});

copiar.addEventListener("click", copiarTexto);
copiar.addEventListener("touchend", copiarTexto);

function copiarTexto() {
    let mensaje = document.getElementById("mensaje").value;
    mensaje.select();
    navigator.clipboard.writeText(mensaje);
    alert("Texto copiado");
}


