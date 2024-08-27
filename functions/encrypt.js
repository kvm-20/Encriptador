// Selección de elementos
let textarea = document.querySelector(".presentacion__contenido__input");
let mensaje = document.getElementById("outputText");
let placeholderImage = document.getElementById("placeholderImage");
let copyButton = document.getElementById("copyButton");

function encriptacion(texto) {
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function desencriptacion(texto) {
    return texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

function encriptar() {
    let texto = textarea.value.trim();
    
    
    if (/[^a-z\s]/.test(texto)) {
        mensaje.textContent = 'El texto debe contener solo letras minúsculas y espacios.';
        placeholderImage.style.display = 'block';
        copyButton.style.display = 'none';
        textarea.value = "";
        return;
    }
    
    const txEncriptado = encriptacion(texto);

    if (texto === '') {
        placeholderImage.style.display = 'block';
        mensaje.textContent = 'Ningún mensaje fue encontrado';
        copyButton.style.display = 'none';
    } else {
        placeholderImage.style.display = 'none';
        mensaje.textContent = txEncriptado;
        copyButton.style.display = 'block';
    }

    textarea.value = "";
}

function desencriptar() {
    let texto = textarea.value.trim();
    
    
    if (/[^a-z\s]/.test(texto)) {
        mensaje.textContent = 'El texto debe contener solo letras minúsculas y espacios.';
        placeholderImage.style.display = 'block';
        copyButton.style.display = 'none';
        textarea.value = "";
        return;
    }
    
    const txDesencriptado = desencriptacion(texto);

    if (texto === '') {
        placeholderImage.style.display = 'block';
        mensaje.textContent = 'Ningún mensaje fue encontrado';
        copyButton.style.display = 'none';
    } else {
        placeholderImage.style.display = 'none';
        mensaje.textContent = txDesencriptado;
        copyButton.style.display = 'block';
    }

    textarea.value = "";
}

function copiar() {
    
    const textoACopiar = mensaje.textContent;

    
    navigator.clipboard.writeText(textoACopiar)
        .then(() => {
            
            mensaje.textContent = 'Ningún mensaje fue encontrado';
            placeholderImage.style.display = 'block';
            copyButton.style.display = 'none';
            alert("Texto copiado al portapapeles");
            
            textarea.value = textoACopiar;
        })
        .catch(err => {
            console.log('Algo salió mal al copiar el texto: ', err);
        });
}

