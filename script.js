// Función para encriptar el texto
function encriptar(texto) {
    let textoEncriptado = texto.replace(/e/g, "enter")
                               .replace(/i/g, "imes")
                               .replace(/a/g, "ai")
                               .replace(/o/g, "ober")
                               .replace(/u/g, "ufat");
    return textoEncriptado;
}

// Función para desencriptar el texto
function desencriptar(texto) {
    let textoDesencriptado = texto.replace(/enter/g, "e")
                                  .replace(/imes/g, "i")
                                  .replace(/ai/g, "a")
                                  .replace(/ober/g, "o")
                                  .replace(/ufat/g, "u");
    return textoDesencriptado;
}

// Función para manejar el botón de encriptar
function btnEncriptar() {
    event.preventDefault();
    let mensaje = document.querySelector(".text-area").value;
    let resultado = encriptar(mensaje);
    mostrarResultado(resultado);
}

// Función para manejar el botón de desencriptar
function btnDesencriptar() {
    event.preventDefault();
    let mensaje = document.querySelector(".text-area").value;
    let resultado = desencriptar(mensaje);
    mostrarResultado(resultado);
}

// Función para mostrar el resultado y ocultar la imagen
function mostrarResultado(resultado) {
    document.querySelector(".result-img").style.display = "none";
    document.querySelector(".result-title").textContent = "Resultado:";
    document.querySelector(".result-text").textContent = resultado;
}

// Función para copiar el texto al portapapeles
function copiarTexto() {
    let texto = document.querySelector(".result-text").textContent;
    navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado al portapapeles");
    });
}

// Event listener para el botón de copiar
document.querySelector(".btn-copiar").addEventListener("click", copiarTexto);


