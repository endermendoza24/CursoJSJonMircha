//   quintos ejercicios del curso de javascript de jon Mircha

// 16. Programa una funcion que devuelva el monto final despues de aplicar un descuento a una cantidad dada, por ejemplo miFuncion(1000,20) devolverá 800

const descuentos = (cantidad, descuento = 0) =>{
    if(cantidad === undefined) console.warn("Ingrese un número");


    let montoFinal = 0;

    montoFinal = (cantidad - ((cantidad * descuento) / 100));

    return  console.info(`El descuento aplicado a C$ ${cantidad} fue de: ${descuento}%, \n siendo el monto final de: C$ ${montoFinal}`);
    
}

descuentos(1000, 25);



// 15. programa una funcion que convierta numeros de base binaria a decimal  viceversa

const convertirBinarioDecimal = (numero = undefined, base = undefined) =>{
    if(numero === undefined) console.warn("Ingrese un numero valido");
    if(typeof numero  !== "number") return console.warn(`Èl ${numero} no es válido`);
    if(base === undefined) return console.warn("La base no puede estar vacía");
    if(typeof base !== "number") return console.error(`El número ${base} no es válido`);

    if(base === 2){
        return console.info(`${numero} base ${base} = ${parseInt(numero, base)} en base decimal`);
    }else if(base === 10 ){
        return console.info(`${numero} base ${base} = ${numero.toString(2)} en base binaria`);
    }else{
        console.error("El tipo de base a convertir no es válido");
    }
}

convertirBinarioDecimal(100,2);
convertirBinarioDecimal(4,10);
convertirBinarioDecimal(114,10);
convertirBinarioDecimal(114,12);

// que manera mas sencilla de convertir, gracias a javascrip que tiene estos metodos y no como en los otros lenguajes


// 17. Programa una funcion que dada una fecha valida  determine cuantos años han pasado hasta el dia de hoy 



const calcularAnios = (fecha = undefined) =>{
    if(fecha === undefined) console.warn("Ingrese una fecha");
    if(!(fecha instanceof Date)) return console.error("El valor que ingresaste no es válido");

    let hoyMenosFecha = new Date().getTime() - fecha.getTime();

    let aniosEnMS = 1000* 60 * 60 *24 *365;

    let aniosHumanos =  Math.floor(hoyMenosFecha / aniosEnMS)

   return (Math.sign(aniosHumanos) ===  -1)
   ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
   : (Math.sign(aniosHumanos) === 1)
   ? console.info(`Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}`)
   :  console.info("Estamos en el año actual");


}

calcularAnios(new Date());
calcularAnios(new Date(1984,4,23));
calcularAnios(new Date(2000, 4, 23));
calcularAnios(new Date(1960,5,26));
calcularAnios(new Date(1987,4,05));
calcularAnios(new Date(1970,7,28));
calcularAnios(new Date(2030,4,23));