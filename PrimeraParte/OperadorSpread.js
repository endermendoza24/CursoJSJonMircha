//  esto es muy util para frameworks

// los parametroz son una forma de virtualmente ir agrergando parametros infinitos
/// a una funcuioin, por ejemplo cuando nose sabe que valores se van a agregar etc, se definen anteponeindoles tres puntos suspensivos antes del nombre donde estan guardados

function sumar( a, b, ...c){
    let resultado = a + b;

    c.forEach(function(n){
        resultado += n;
    });

    return resultado;
}

console.log(sumar(11,2,2));


// Operador de propagación (spread)
const arr1 = [1,2,3,4,5]
const arr2 = [6,7,8,9,0]

const arr3 = [...arr1, ...arr2]; // el operador se usa para "sumar", mejor dicho mezclar los elementos de
//  los arreglos, o sea, en el arreglo uno están los números del uno al cinco, en el arreglo dos,
//  están los números del  6 al 10. El arreglo 3 a través del operador spread los mezcla de manera ordenada.


console.log(arr3);