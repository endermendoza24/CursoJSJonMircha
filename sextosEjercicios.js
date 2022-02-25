// ejecicos hechos en el curso de Jon Mircha de javascript

//  18. Programa una funcion que dada una cadena de texto cuent el numero de vocales y consonanes

const contarLetras = (cadenas = "") =>{
    if(!cadenas) return console.warn("No ingresaste una cadena de texto");

    if(typeof cadenas !== "string") return console.error(`El valor ${cadenas} no es una cadena de texto`);

    let vocales = 0;
    let consonantes = 0;

    


    for(let letra of cadenas){
        if( /[AEIOUÁÉÍÓÚÜaeiouáéíóúü]/.test(letra )){
            vocales++;
        }

        if(/[BCDFGHJKLMNÑOPQRSTVWXYZbcdfghjklmnñopqrstvwxyz]/.test(letra)){
            consonantes++;
        }
    }

    return console.info({
        cadenas,
        vocales,
        consonantes,

    })
}


contarLetras("abcdefghijklmnñopqrstuvwxyz"); 

console.clear();
contarLetras("Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ullam molestiae incidunt impedit voluptatem earum, sit commodi vel eveniet quas iusto molestias sed sequi voluptatibus nisi itaque quaerat culpa eum.")


//   quede en el minuto 11:48


//19. Progrma una funcion que valide que un texto sea un numero valido
console.clear();

const validarNombre = (nombre = "")=>{
    if(!nombre) return console.warn("No ingresaste un nombre");

    if(typeof nombre !== "string") return console.error(`El valor ${nombre} no es una cadena de texto`);

    let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(nombre);

    return(expReg) ? console.info(`${nombre} es un nombre válido`) : console.info(`${nombre} no es un nombre valido`)
}

validarNombre("Endersson Alonso Mendoza  Muño4");
console.clear();






// 20. Programa una funcion que valide que un tetxo  sea un correo electronico valido

const validarEmail = (email = "") =>{
    if(!email) return console.warn("No ingresaste un email");

    if(typeof  nombre !== "string") return console.error(`El valor ingresado ${email} no es una cadena de texto`);

    let expReg = /[a-z0-9]+(\.[_a-z0-9]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

    return(expReg) ? console.info