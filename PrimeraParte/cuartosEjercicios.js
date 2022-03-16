// cuartos ejercicios del curso de javascript de Jon mircha

// 12. Programa una funcion que determine si es un numero primo o compuesto

const numeroPrimo = (numero = undefined) =>{
    if(numero === undefined) console.warn("No ingresaste un nunero");
    if(typeof numero !== "number") return console.error(`El numero ingresado ${numero} no es un número`);
    if(numero === 0) console.error("EL numero no puede ser 0");
    if(Math.sign(numero) === -1) console.error("EL numero no puede ser negativo");

    let divisible = false;
    //   quedé en el 4:20
    for(let  i = 2; i < numero; i++){
        if((numero % i) === 0){ //  si el numero es divisible entre 2 o mas
            divisible = true; // se cambia esta variable a true
            break; //  se rompe el ciclo
        }
    }

    return(divisible) ? console.info(`El número ${numero} no es primo.`)
    : console.info(`El número ${numero} sí es primo`);
}

numeroPrimo(0);

// 13. Programa una funcion que determine si se es un numero par o impar

const parImpar = (numero = undefined) =>{
    if(numero === undefined) console.error("Ingresa un numero");
    
    (numero % 2 === 0)
    ? console.info(`El número ${numero} es par`)
    : console.info(`El número ${numero} es impar`);
}


parImpar(2);



// 14. Programa una funcion que convierta de grados celsius a farenheit
// this equation is F = (C * 1.8) +32

const convertirFarenheit = (celsius) =>{
    let faren;
    faren = (celsius * 1.8) + 32;
    console.info(`${celsius} convertido a farenheit es: ${faren}`);

}

convertirFarenheit(200);