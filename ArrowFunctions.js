

const saludar = (nombre) => console.log(`Hola ${nombre}`);


saludar('Endersson Alonso Mendoza Muñoz');

// const sumar = function(num1,num2){
//     return num1 + num2;
// }


const sumar = (a,b) => a+b;

console.log(sumar(18,18));

const funcionDeVariasLineas = ()=>{
    console.log("Hola");
    console.log("Estoy experimentando");
    console.log("con las funciones flecha por primera vez en Javascript");
}

funcionDeVariasLineas();

const numeros = [1,2,3,4,5];

numeros.forEach((ele,index)=>{
    console.log(`${ele} está en la posición ${index}`)
});

const suma = (a,b,...c) => {
    let resultado = a+b;
    c.forEach(n=>{
        resultado += n;
    });
    return resultado;
}

console.log(suma(1,2,3,4))

const perro = {
    nombre:"Laika",
    edad:3,
    color:"negro",
    ladrar: function(){
        console.log(this);
    }
}

perro.ladrar();