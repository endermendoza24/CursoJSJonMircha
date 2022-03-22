// recordando el spread operator

const suma = (a,b,...c) =>{
    let resultado = a + b;

    c.forEach(element => {
        resultado += element;
    });

    return resultado;
}

console.log(suma(2,3,4,5,6));