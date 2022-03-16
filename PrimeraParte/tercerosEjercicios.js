//  Terceros ejercicios del curso de javascript de Jon Mircha
// 9. Programa una funcion que obtenga un numero aleatorio entre 501 y 600


const numeroAleatorio = (min, max) =>{
    return console.info(Math.round((Math.random() * (max - min + 1)) + min));
}


numeroAleatorio(501,600);

// 10. Programa una funcion que evalue si un numero es capicua

const numeroCapicua = (numero = 0) =>{
 if(!numero) console.warn("No ingresaste un numero");

 if(typeof numero !== "number") return console.error(`El numero ingresado ${numero} no es un número`);
 // convertir el numero a string
 numero = numero.toString(); //  convertirmos el numero a cadena de texto
 let alReves = numero.split("").reverse().join(""); //  con esto basicamente al igual que en las cadenas jvolteamos el numero en este caso

 return(numero === alReves)
 ? console.info(`Si es capicua numero original ${numero} y al revés ${alReves}`)
 : console.info(`No es capicua ${numero} y ${alReves}`);

}

numeroCapicua(2002);
numeroCapicua(18.99);
numeroCapicua(212.212);
// 11. Factorial de un numero

const factorial = (numero = undefined) =>{
    if(numero === undefined) console.warn("No ingresaste un nunero");
    if(typeof numero !== "number") return console.error(`El numero ingresado ${numero} no es un número`);
    if(numero === 0) console.error("EL numero no puede ser 0");
    if(Math.sign(numero) === -1) console.error("EL numero no puede ser negativo");

    let fact = 1;

    for(let i = numero; i > 1; i--){
        fact *=i;

    }

    console.info(`EL factorial del numero ${numero} es ${fact}`);
}

factorial(8);