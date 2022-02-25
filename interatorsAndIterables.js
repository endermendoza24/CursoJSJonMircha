const iterable = [1,2,3,4,5];
//  accedemos al iterador de la variable
const iterator = iterable[Symbol.iterator]();


console.log(iterable);
console.log(iterador);

console.log(iterator.next())