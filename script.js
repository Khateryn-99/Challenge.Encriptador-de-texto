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
    if (mensaje) {
        let resultado = encriptar(mensaje);
        mostrarResultado(resultado);
    }
}

// Función para manejar el botón de desencriptar
function btnDesencriptar() {
    event.preventDefault();
    let mensaje = document.querySelector(".text-area").value;
    if (mensaje) {
        let resultado = desencriptar(mensaje);
        mostrarResultado(resultado);
    }
}

// Función para mostrar el resultado y ocultar la imagen
function mostrarResultado(resultado) {
    document.querySelector(".result-img").style.display = "none";
    document.querySelector(".result-title").textContent = ""; // Eliminar el texto "Resultado:"
    document.querySelector(".result-text").textContent = resultado;
    document.querySelector(".btn-copiar").style.display = "block";
}

// Función para restablecer el estado original
function restablecer() {
    document.querySelector(".result-img").style.display = "block";
    document.querySelector(".result-title").textContent = "Ningún mensaje fue encontrado";
    document.querySelector(".result-text").textContent = "Ingrese el texto que desees encriptar o desencriptar.";
    document.querySelector(".btn-copiar").style.display = "none";
    document.querySelector(".text-area").value = "";
}

function btnLimpiar() {
    // Limpiar el campo de texto
    document.querySelector('.text-area').value = '';

    // Restablecer la imagen de resultado
    document.querySelector(".result-img").style.display = "block";

    // Restablecer el título y el texto del resultado
    document.querySelector(".result-title").textContent = "Ningún mensaje fue encontrado";
    document.querySelector(".result-text").textContent = "Ingrese el texto que desees encriptar o desencriptar.";

    // Ocultar el botón de copiar (opcional)
    document.querySelector(".btn-copiar").style.display = "none";
}

// Función para copiar el contenido del textarea al portapapeles
function btnCopiar() {
    const textarea = document.querySelector('.text-area');
    const text = textarea.value;

    // Usar la API Clipboard
    navigator.clipboard.writeText(text).then(() => {
        alert('Texto copiado al portapapeles');
    }).catch(err => {
        console.error('No se pudo copiar el texto: ', err);
    });
}

// Ejemplo de cómo invocar las funciones sin hacer clic
document.addEventListener('DOMContentLoaded', (event) => {
    // Llamar a la función de limpiar automáticamente
    btnLimpiar();

    // Llamar a la función de copiar automáticamente
    btnCopiar();
});
