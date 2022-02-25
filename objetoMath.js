console.log("Hello world");
console.log(Math.PI);
console.log(Math.abs(-18)); //  valor absoluto
console.log(Math.ceil(5.8)); //  redondea al entero mas cercano, no importa si es menor que .5
console.log(Math.floor(6.5)); //  este es lo opuesto a ceil, pues baja asi se pase de .5
console.log(Math.round(7.5)); //  este si redondea al mas cercano inmediato
console.log(Math.sqrt(81)); // raiz cuadrada 
console.log(Math.pow(2,5)); //  eleva a la x potencia
console.log(Math.sign(5.4)); // indica si es positivo, negativo o cero

/* Los numeros aleatorios estan comprendidos entre 0 y 1
si queremos numeros más altos habria que multiplicarlos y posteriormente redondearlos
en este caso podriamos hacer uso del metodo round, dentro iria el metodo random
*/

console.log(Math.round(Math.random() * 1000));  //  dara  numeros aleatorios comprendidos
//  entre 0 y 1
