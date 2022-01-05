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

console.log(perro)

alert("hola");