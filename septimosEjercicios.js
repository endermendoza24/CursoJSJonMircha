//  ejercicios del curso de javascript de Jon Mircha

// 21. Programa una funcion que dado un array numerico devuelva otro array con los numeros elevados al cuadrado

const devolverCuadrado = (arr = undefined)=>{
    if(arr === undefined) return console.warn("No ingresaste el arreglo");

    if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

    if(arr.length === 0) return console.error("El arreglo esta vacio");

    for(let num of arr){
        if(typeof num !== "number") return console.error(`El valor que introduciste ${num} no es un numero`);

        
    }

    const newArr = arr.map(el => el * el);

    return console.info(`Arreglo original: ${arr},\nArreglo elevado al cuadrado ${newArr}`);
}

devolverCuadrado([1,4,8]);
devolverCuadrado([1,2,3,4,5,6,7,8,9,10]);


//22. Programa una funcion que dado un array devuelva el numero mas alto y el mas bajo de dicho array

const arrayMinMax = (arr = undefined)=>{
    if(arr === undefined) return console.warn("No ingresaste el arreglo");

    if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

    if(arr.length === 0) return console.error("El arreglo esta vacio");

    for(let num of arr){
        if(typeof num !== "number") return console.error(`El valor introducido ${num} no es valido`);
    }
    return console.info(`Arreglo original: ${arr}\nValor mayor: ${Math.max(...arr)}\nValor menor: ${Math.min(...arr)}`)
}

arrayMinMax([1,2,3,4,10,288]);


//23. programa una funciin que dado un array de numeros devuelva un objeto con 2 arreglos, en el primero almacena los numeros pares y en el segundo los impares.

const separarParesImpares = (arr = undefined)=>{
    console.clear();
    if(arr === undefined) return console.warn("No ingresaste el arreglo");

    if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

    if(arr.length === 0) return console.error("El arreglo esta vacio");

    for(let num of arr){
        if(typeof num !== "number") return console.error(`El valor introducido ${num} no es valido`);
    }

    return console.info({
        pares:arr.filter(num => num%2===0),
        impares:arr.filter(num => num%2===1)
    });

}

//  minuto 10:55

separarParesImpares();
separarParesImpares(1);
separarParesImpares([2,4,5,6,7,9,12,9]);

//  entendi que filter sirve para filtrar y devolver rn cierta cantidad de arreglos 

//  en este ejemplo los filtra a traves de si son pares o impares, además de que manda segunsu tipo a arrehglos diferenbtes, es decir que los impares los manda a un arreglo de solo impares, mientras que con lo0 pares hace lo mismo mandandolos a un arreglo de solo pares.