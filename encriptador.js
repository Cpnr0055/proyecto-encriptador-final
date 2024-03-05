let matrizCode = [
    ["e","enter"],  // indice 0
    ["i","imes"],   // indice 1
    ["a","ai"],     // indice 2
    ["o","ober"],   // indice 3
    ["u","ufat"],   // indice 4
];
let text_input = document.querySelector("#campo-texto");
let text_output = document.querySelector("#campo-mensaje");

let matrizPermitidos = [
    " ",     //0
    "a",     //1
    "b",     //2 
    "c",     //3
    "d",     //4
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
 ]; 

function btnEncriptar(){    
    let input= validacion(text_input.value);  
    let inputaCifrar = encriptar(input); 
    /* console.log(inputaCifrar);  */ 

   /*  Esta funcion aplicara tanto para el boton Encritar como para el boton desencriptar
    Ya que valida la entrada  */

    document.getElementById("bloque-imgn-id").style.display = "none";
    text_output.value = inputaCifrar; 
    text_input.value = "";    
} 

function btnDesencriptar(){                    //funcion que retorna el valor del texto a encriptar, se manda a llamar desde html
    let input = validacion(text_input.value);
    let inputCifrado = desEncriptar(input);    
    console.log(inputCifrado);
  
    document.getElementById("bloque-imgn-id").style.display = "none";
    text_output.value = inputCifrado;
    text_input.value = ""; 
}

function btnCopy(){
    let textoCopiado = navigator.clipboard.writeText(text_output.value)
    .then(() => {
        console.log("Copiado al portapapeles");   //texto cpiado con exito
        alert("Copiado al portapapeles");
        },() => {
        console.error("Error al copiar");  //error al copiar texto
        alert("Error al copiar");
        });
    document.getElementById("bloque-imgn-id").style.display = "";
    text_output.value = "";
}

function validacion(datos){
    for(indice in datos){
        //console.log(indice,datos);
        if(!matrizPermitidos.includes(datos[indice])){
            datos[indice] = matrizPermitidos;
            //console.log("No se permiten Mayusculas ni caracteres especiales");
            alert("No se permiten Mayusculas ni caracteres especiales");
            text_input.value = "";
            return false;    
        }   
    }
    return datos;
}

function encriptar(frase){
    for(indice in matrizCode){
        if(frase.includes(matrizCode[indice][0])){
            frase = frase.replaceAll(
                matrizCode[indice][0],
                matrizCode[indice][1]
                )
        }          
    }
    return frase;
}

function desEncriptar (fraseCifrada){
    for(indice in matrizCode){
        if(fraseCifrada.includes(matrizCode[indice][1])){
            fraseCifrada = fraseCifrada.replaceAll(
                matrizCode[indice][1],
                matrizCode[indice][0]
                )
        }      
    }
    return fraseCifrada;
}