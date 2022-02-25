// clases y herencia
class Animal{
    //  el constructor es un metodo especial que se ejecuta al momento de instanciar una clase

    constructor(nombre, genero){
        this.nombre = nombre;
        this.genero = genero;
    }

    sonar(){
        console.log("Hago sonidos porque estoy vivo");
    }

    saludaR(){
        console.log(`Hola a todos, en especial a ${this.nombre}`);
    }
}

class  Perro extends Animal{ // quiere decir que la clase perro hereda dela clase animal
//  javascript al igual que muchos lenguajes usa la palabra clave "extends"
    constructor(nombre, genero, size){
        super(nombre, genero); //  con el metodo super se manda a llamar al constructor de la clase padre
    this.size = size;
    }
    sonar(){
        console.log("Soy un perro y mi sonido es un ladrido");
    }
    ladrar(){
        console.log("Gua, gua, gua");
    }
}


const mimi = new Animal("Mimi","Hembra");
    scooby = new Perro("Scooby", "Macho", "Gigante");

    mimi.sonar();
    mimi.saludaR();

    scooby.sonar();
    scooby.saludaR();
    scooby.ladrar();