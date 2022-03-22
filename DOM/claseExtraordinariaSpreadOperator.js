// Suma con spread operator

const suma = (num1, num2, ...num) =>{

    let resultado = num1 + num2;

    num.forEach(element => {
        resultado += element;
    });
    return resultado;
}

console.log(suma(2,3,4,5,6));

// copiando un array usando el spread operator

const lista1 = [1,2,3,4,5];

const listaCopia = [...lista1];

console.log(lista1);

//  sumando dos o más arrays
const array1 = [1,2,3];
const array2 = [4,5,6];

const arrayResultante = [...array1, ...array2];
console.log(arrayResultante);
// de la misma manera tambienpermite añadir nuevos elementos en el array


//  suma con todo

function suma1(...numeros){
    const resultado = numeros.reduce(
        (prevValue, nextValue)=>prevValue + nextValue, 0
    );
    console.log(resultado);
}

suma1(`Suma es: ${1,2,3,4,5,6,7,8,9 }`)