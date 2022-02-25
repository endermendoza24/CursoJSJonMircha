//  ejercicios

//  programa una funcion que cuente el numero de caracteresdeuna cadena de texto

let cadena = "Hola Mundo";

function contar(){
    console.log(`La extension de la  cadena es de ${cadena.length}`)
}

contar();
//  2. programa una funcion que te devuelva el texto recortado segun el numero de caracteres indicados

function recortado(){
    console.log(cadena.slice(0, 4));
}

recortado();

// 3. Programa una funcion que dada una string te devuelva un array de datos separados por caracteres

let cadenaDos = "hola que tal";
function devolverArray(){
    console.log(cadenaDos.split(4))
}

devolverArray();


//  4. Funcion que repita texto x cantidad de veces

let cadenaCuatro = " Hola mundo ";

function repetir(){
    console.log(cadenaCuatro.repeat(3));
}


repetir();


//  4. Forma de hacerlo segun el curso

const repetirTexto = (texto = "", veces = undefined) =>{
    if(!texto) return console.warn("No ingresaste un texto");

    if(veces === undefined) return console.warn("No ingresaste el numero de veces a repetir el texto");

    if(veces === 0) return console.warn("El numero de veces no puede ser 0");

    if(Math.sign(veces) === -1) return console.warn("El  numero de veces no puede ser negativo");

    for(let i = 1; veces <= i; i++){
        console.info(`${texto}, ${i}`);
    }
}

repetirTexto("Endersson", 3);