// SUMA WITH SPREAD OPERATOR

const suma = (num1, num2, ...num) => {
    let resultado = num1 + num2;
    

    num.forEach(element => {
        resultado += element;        
    });
    return resultado;
}

console.log(suma(1,2,3,5,5,5,5,6,4));