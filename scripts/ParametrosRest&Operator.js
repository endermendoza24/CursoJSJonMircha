//  Sirven mucho en los frameworks, entre otras cosas
//  si quiero aprender React, esto me debe de quedar muy claro
// se definen anteponiendo tres puntos suspensivos

function sumar(a, b, ...c){
    let resultado  = a+ b;

    c.forEach(function(n){
        resultado += n;
    });

    return resultado;
}

console.log(sumar(1,2));