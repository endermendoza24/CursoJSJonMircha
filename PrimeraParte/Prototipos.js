// clases, objetos, metodos
//  programación oprientada a objetos

// const animal = {
//     nombre : "Snoopy",
//     ladrar : () =>{
//         console.log("Gua, gua");
//     }
// }

// console.log(animal);

//  funcion constructora donde asignamos  los 
//  metodos al protipo, no a la funcion como taL


function Animal(nombre, genero){
    // estos son los atributos

    this.nombre = nombre;
    this.genero = genero;
}
    //  es importante agregar el this
    //  esta es el area de metodos
    Animal.prototype.sonar = function(){
        console.log("Hago sonidos porque estoy vivo");
    }
    Animal.prototype.saludar = function(){
        console.log(`Hola me llamo ${this.nombre}`)
    }


const snoopy = new Animal('Snoopy', 'Macho'),
LolaBunny = new Animal('Lola', 'Hembra');

console.log(snoopy);
console.log(LolaBunny);

snoopy.sonar();
snoopy.saludar();

LolaBunny.sonar();
LolaBunny.saludar();