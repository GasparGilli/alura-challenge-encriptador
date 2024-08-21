const textArea = document.querySelector(".text-area");
const informationMsj = document.querySelector(".informacion");
const mensaje = document.querySelector(".mensaje");

// 'La letra "e" es convertida para "enter"'
// 'La letra "i" es convertida para "imes"'
// 'La letra "a" es convertida para "ai"'
// 'La letra "o" es convertida para "ober"'
// 'La letra "u" es convertida para "ufat"'

function btnEncriptar(){
    const textoencriptado = encriptar(textArea.value)
    const regex = /[-!$%^&*()_+|~=`´áéíóú{}\[\]:";'<>?,.\/A-Z]/
    if (regex.test(textoencriptado)) {
      return  informationMsj.className = "mensaje-error"
    }

    informationMsj.className = "informacion"
    mensaje.value = textoencriptado
    textArea.value = "" 
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e" , "enter"], ["i" , "imes"], ["a" , "ai"], ["o" , "ober"], ["u" , "ufat"]]

    for(let i = 0; i< matrizCodigo. length; i++){
        if(stringEncriptado. includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncriptado
}

function btnDesencriptar(){
    const textoencriptado = desencriptar(textArea.value)
    mensaje.value = textoencriptado
    textArea.value = "" 
}


function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e" , "enter"], ["i" , "imes"], ["a" , "ai"], ["o" , "ober"], ["u" , "ufat"]]

    for(let i = 0; i< matrizCodigo. length; i++){
        if(stringDesencriptado. includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }

    }
    return stringDesencriptado
}

function copy() {
    const textoParaCopiar = document.querySelector(".mensaje").value;
    const textoCopiado = navigator.clipboard.writeText(textoParaCopiar)

    if(!textoParaCopiar) return alert("No hay texto para copiar");
    alert("Texto copiado: " + textoParaCopiar)

    return textoCopiado
  }
  
document.querySelector(".copiar").addEventListener("click", copy);

