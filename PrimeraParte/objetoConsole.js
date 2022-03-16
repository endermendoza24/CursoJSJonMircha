//  Objeto console
console.log("Hello world");
console.error("This is error");
console.warn("This is warn"); 
console.info('This is a info');
console.log("Log es un registro de lo que ha pasado en nuestra app");

let name = "Jon", 
    lastname = "Mircha",
    age = 35;

    console.log(name);
    console.log(lastname);
    console.log(age);

    //  de esta  manera se imprime en una sola linea de  codigo
    console.log(name, lastname, age);
    //  interpolando valores
    console.log(`Hello, my name is: ${name}, and my lastname is: ${lastname}, and i'm ${age} years old`);

    console.clear(); //  esto limpia la consola.
    //   hay ciertas  diferencias entre dir u log.

    console.log(document);
    console.dir(document);
    //  grupos
    console.group('los grupos de @JonMircha  en youtube');
    console.log("Hi");
    console.log("I'm Endersson Alonso");
    console.log("I'm 21 years old");
    console.log("I want to learn english");
    console.groupEnd();
    console.clear();

    // Tabla
    console.log(console);
    console.table(Object.entries(console));
    console.clear();

    //  arreglos
    const numeros = [1,2,3,4,5],
        vocales = ["a", "e", "i", "o", "u"];

    const perro = {
        nombre:"Boby",
        raza:"caniche",
        color:"blanco"
    }

    console.table(numeros);
    console.table(vocales);
    console.table(perro); // en este caso especial muestra el indice del objeto, y no el
    //  indioce real como con los arreglos
    console.clear();

    //  tiempo
    console.time("Cuanto tarda mi arreglo?");
    const array = Array(1000000);

    for(let i = 0; i < array.length; i++){
        array[i] = i;
    }

    //  sirve paara saber  cuanto tiempo tarda en ejecutarse cierta linea de 
    //  codigo, que esta delimitada por el metodo time y el metodo end
    console.timeEnd("Cuanto tarda mi arreglo?");

    console.clear();


    for(let i = 0; i<=100; i++){
        console.count("Codigo for");
        console.log(i);
    }