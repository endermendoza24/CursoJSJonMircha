


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

//  Herencia prototípica
//  funcion constructora perro, que va a heredar de animal

function Perro(nombre, genero, size){
    // super(); //  este metodo manda a llamar al consteuctor de la  clase padre
    this.super = Animal;
    this.super(nombre, genero);
    this.size = size;

}

//   aunque la sintaxis correcta de la herencia en javascript es esta:
Perro.prototype = new Animal();
//  perro está heredando de animal
Perro.prototype.constructor = Perro;


//  sobreescritura de los metodos del padre al hijo
Perro.prototype.sonar = function(){
    console.log("Hola soy un perro y estoy ladrando");
}
Perro.prototype.ladrar = function(){
    console.log("<<<< ESTOY LADRANDO >>>>");
}

const snoopy = new Perro('Snoopy', 'Macho', 'Mediano'),
LolaBunny = new Animal('Lola', 'Hembra');

console.log(snoopy);
console.log(LolaBunny);

snoopy.sonar();
snoopy.saludar();

LolaBunny.sonar();
LolaBunny.saludar();