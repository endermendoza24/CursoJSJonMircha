//  Objetos literales

// Se denomina objeto literal al objeto cuyas propiedades están declaradas textualmente en el código. //// Los objetos pueden almacenar métodos en su interior. Para acceder a las propiedades de un objeto // /// dentro de un método es necesario usar la palabra reservada this por scope de las variables.

let nombre =  'enDeR';
    edad = 7;

const perro ={
    nombre:nombre,
    edad:edad,
    ladrar:function(){
        console.log("Gua, gua");
    }
}
const dog= { // con ECMASCRIPT6 yano es necesario hacer esto largo, pues el lenguaje entiende de que 
    //  se le asignara el mismo valor  nombre de la variable en el objeto
    nombre,
    edad,
    raza:'Caniche',
    ladrar(){
        console.log("gua, gua, gua");
    }
}
console.log(perro);
perro.ladrar();
console.log(dog);
dog.ladrar();