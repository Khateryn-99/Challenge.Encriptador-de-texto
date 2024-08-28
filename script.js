// script.js

function btnEncriptar() {
    const textArea = document.querySelector('.text-area');
    const mensaje = textArea.value;
    const mensajeEncriptado = encriptar(mensaje);
    mostrarResultado(mensajeEncriptado);
}

function btnDesencriptar() {
    const textArea = document.querySelector('.text-area');
    const mensaje = textArea.value;
    const mensajeDesencriptado = desencriptar(mensaje);
    mostrarResultado(mensajeDesencriptado);
}

function encriptar(mensaje) {
    let encriptado = mensaje.replace(/e/g, 'enter')
                            .replace(/i/g, 'imes')
                            .replace(/a/g, 'ai')
                            .replace(/o/g, 'ober')
                            .replace(/u/g, 'ufat');
    return encriptado;
}

function desencriptar(mensaje) {
    let desencriptado = mensaje.replace(/enter/g, 'e')
                               .replace(/imes/g, 'i')
                               .replace(/ai/g, 'a')
                               .replace(/ober/g, 'o')
                               .replace(/ufat/g, 'u');
    return desencriptado;
}

function mostrarResultado(mensaje) {
    const resultContainer = document.querySelector('.result-container');
    const resultTitle = document.querySelector('.result-title');
    const resultText = document.querySelector('.result-text');
    const resultImg = document.querySelector('.result-img');

    resultTitle.textContent = 'Resultado:';
    resultText.textContent = mensaje;
    resultImg.style.display = 'none'; // Ocultar la imagen
}

// Asociar las funciones a los botones
document.querySelector('.btn-encriptar').addEventListener('click', function(event) {
    event.preventDefault();
    btnEncriptar();
});

document.querySelector('.btn-desencriptar').addEventListener('click', function(event) {
    event.preventDefault();
    btnDesencriptar();
});

