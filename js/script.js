
    
    var copiar = document.getElementById("btn-copiar");
    var encriptar = document.getElementById("btn-encriptar");
    var desencriptar = document.getElementById("btn-desencriptar");

    encriptar.addEventListener("click", function() {
        let mensaje = document.getElementById("mensaje");
        let texto_eti = document.getElementById("texto");
        let tituloMensaje = document.getElementById("titulo-mensaje");
        let parrafo = document.getElementById("mensaje-ayuda");
        let munheco = document.getElementById("munheco");

        let texto = document.getElementById("texto").value;

    let textoCifrado = texto
            .replace(/e/gi, "enter")
            .replace(/i/gi, "imes")
            .replace(/a/gi, "ai")
            .replace(/o/gi, "ober")
            .replace(/u/gi, "ufat");

    if (texto.trim().length <= 0) {
        munheco.style.display = "flex";
        mensaje.style.display = "none";
        copiar.style.display="none";
        tituloMensaje.style.display = "flex";
        parrafo.style.display = "flex";
        swal("Ohh nooo!!!","Debes ingresar algún texto para encriptar","warning");
        texto_eti.value="";
    } else if(/^[a-z\s]+$/.test(texto)) {
        munheco.style.display = "none";
        parrafo.style.display = "none";
        tituloMensaje.style.display = "none";

        mensaje.style.display = "flex";
        mensaje.style.position = "absolute";
        copiar.style.display = "flex";
        mensaje.value = textoCifrado;
    }else{
        munheco.style.display = "flex";
        mensaje.style.display = "none";
        copiar.style.display="none";
        tituloMensaje.style.display = "flex";
        parrafo.style.display = "flex";
        swal("Ohh nooo!!!","Debes ingresar solo letras a-z","warning");
        texto_eti.value="";
    }
    });

desencriptar.addEventListener("click",function(){
    let mensaje = document.getElementById("mensaje");
    let texto_eti = document.getElementById("texto");
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("mensaje-ayuda");
    let munheco = document.getElementById("munheco");

    let texto = document.getElementById("texto").value;
    
  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  if (texto.trim().length <= 0) {
    munheco.style.display = "flex";
    mensaje.style.display = "none";
    copiar.style.display="none";
    tituloMensaje.style.display = "flex";
    parrafo.style.display = "flex";
    swal("Oh nooo!!!","Debes ingresar algún texto para desencriptar","warning");
    texto_eti.value="" ; 
}else if(/^[a-z\s]+$/.test(texto)){
    munheco.style.display = "none";
    parrafo.style.display = "none";
    tituloMensaje.style.display = "none";

    mensaje.style.display = "flex";
    mensaje.style.position = "absolute";
    copiar.style.display = "flex";
    mensaje.value = textoCifrado;
    }else{
        munheco.style.display = "flex";
        mensaje.style.display = "none";
        copiar.style.display="none";
        tituloMensaje.style.display = "flex";
        parrafo.style.display = "flex";
        swal("Oh nooo!!!","Debes ingresar solo letras, verifica","warning");
        texto_eti.value="";
    }
});

copiar.addEventListener("click", copiarTexto);
copiar.addEventListener("touchend", copiarTexto);

function copiarTexto() {
    let mensaje = document.getElementById("mensaje").value;

    let texto = document.getElementById("texto");
    let msj_eti = document.getElementById("mensaje");
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("mensaje-ayuda");
    let munheco = document.getElementById("munheco");

    navigator.clipboard.writeText(mensaje);
    swal("Texto copiado",{
      icon: 'success',
      buttons: false,
      timer: 1500
    });
    msj_eti.value ="";
    texto.value="";
    munheco.style.display = "flex";
    msj_eti.style.display = "none";
    tituloMensaje.style.display = "flex";
    parrafo.style.display = "flex";
    copiar.style.display="none";
  }

  function convertir(event) {
    const textarea = event.target;
    const texto = textarea.value;

    const textoSinAcentos = texto
      .toLowerCase()
      .replace(/á/g, 'a')
      .replace(/é/g, 'e')
      .replace(/í/g, 'i')
      .replace(/ó/g, 'o')
      .replace(/ú/g, 'u');
  
    textarea.value = textoSinAcentos;
  }

