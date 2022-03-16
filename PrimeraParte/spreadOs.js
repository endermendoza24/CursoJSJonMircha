
// function multiplicarInfinita(a,b, ...c){
//     let resultado = a * b;
//     c.forEach( function(n){
//         resultado *= n;
//     }

//     );

//     return resultado;
// }

// console.log(multiplicarInfinita(2,2,2,2));

// const sumaInfinita = (a,b, ...c) =>{
//     let resultado = a + b;
//     c.forEach(n => {
//         resultado += n;
//     });

//     return resultado;
// }

// console.log(sumaInfinita(2,2,2,2,2,2,2,2,2,2));

// const restaInfinita = (a,b, ...c) =>{
//     let resultado = a - b;

//     c.forEach(element => {
//         resultado -= element;
//     });

//     return resultado;
// }

// console.log(restaInfinita(10,1,1,1));


const divisionInfinita = (a,b, ...c) => {
    try {
        let resultado;

        c.forEach(element => {
            resultado /= element;
        });
        return resultado;

    } catch (error) {
        console.error("Divided by zero it's no possible");
    }
} 

console.log(divisionInfinita(2,2,50));