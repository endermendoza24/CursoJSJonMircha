//  segundos ejercicios del curso de javascript

//5. Programa una funcion que invierta las palabras de una cadena de texto

const voltearPalabra = (palabra ="") =>{
    if(palabra === "") console.warn("Ingrese algo");

    console.log(palabra.split("").reverse().join(""))

}

voltearPalabra("");

// 6. Una funcion que cuente el numero de  veces que se repite  una palabra en un tetxo largo

const contarCadenas  = (cadena="", texto="") =>{
    let i = 0;
    let contador = 0;

    while(i !== -1){
        i = cadena.indexOf(texto, i);
        if(i !== -1){
            i++;
            contador++;
        }
    }
    return console.info(`La palabra ${texto} se repite ${contador} veces`);
}

contarCadenas("hola mundo adios mundo","mundo");
contarCadenas("Endersson es mi mejor amigo, en serio que mi mejor amigop es endersson a el lo quiero muchoi, porque sin el no habria logrado todo lo que he hecho en la mayor parte de mi vida academica endersson es unja persona muy inteligente y le deseo lomejor del mundo, saben porque porque simplemente se lo merece te quiero mucho ENDERSSON ", "endersson");


// 7. Programa una funcion que valide si un texto es un palindromo

const palindromo = (palabra ="")=>{
    //  validar que no venga vacia
    if(!palabra) return console.warn("No ingresaste una palabra");

    palabra = palabra.toLowerCase();
    let alReves = palabra.split("").reverse().join("");

    return(palabra === alReves) ? console.info(`Si es palindromo, palabra original ${palabra} palabra al revés ${alReves}`) 
    : console.info(`No es palíndromo, palabra original ${palabra} palabra al reves ${alReves}`);

    
}

palindromo("reconocer");

// 8. Programa una funcion que elimine cierto patron de caracteres de un texto dado, por ejemplo pe.miFuncion ("xyz1, xyz2, xyz3, xyz4, xyz5", "xyz") devolvera "1,2,3,4 y 5"

const eliminarCaracteres = (texto = "", patron ="")=>{
    (!texto) ? console.warn("No ingresaste nada")
    : (!patron) ? console.warn("No ingresaste un patron de caracteres") : console.info(texto.replace(new RegExp(patron, "ig"),""))

    
}
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4, xyz5", "xyz");