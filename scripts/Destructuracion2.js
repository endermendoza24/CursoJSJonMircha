// destructuracion - arreglo de numeros
const numeros = [1,2,3];

// sin utilizar la destructuracion

let uno = numeros[0];
dos = numeros[1];
tres = numeros[2];

console.log(uno,dos,tres);

 //  con  destructuracion
//  se crea un areglo al cual se le va a agregar el anterior arreglo, donde están los números.

const [one, two, three] = numeros;
console.log(one,two,three);

let persona = { // ===> aqui es un arreglo
    nombre :"Endersson",
    apellido: "Mendoza",
    edad:21
}

let{nombre, apellido, edad} = persona;
console.log(nombre,apellido,edad);