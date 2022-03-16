// un metodo estatico es aquel que se puede invocar sin necesidad de instanciar la clase
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
    this.raza = null;
    }
    sonar(){
        console.log("Soy un perro y mi sonido es un ladrido");
    }
    ladrar(){
        console.log("Gua, gua, gua");
    }

    //  este es el metodo estatico
    static queEres(){
        console.log("Hola soy un perro, mi nombre cientifico es canis lupus familiaris");
    }
    //  los metodos  getters y setters son obtenedores y establecedores en loslenguahes de programacion
    //  para darse cuenta que es un metodo de tipo getter se le antepone la palabra get
    get getRaza(){
        return this.raza;
    }

    //  para darse cuenta que e sun metodo establecedor se le antepone la keyword set
    //  debido a que este va establecer un nuevo valor, este debe recibir parametros
    set setRaza(raza){
        this.raza = raza;
    }
}

    Perro.queEres();
const mimi = new Animal("Mimi","Hembra");
    scooby = new Perro("Scooby", "Macho", "Gigante");

    mimi.sonar();
    mimi.saludaR();

    scooby.sonar();
    scooby.saludaR();
    scooby.ladrar();
    //   aunque son metodos javascript trata a los getters y setters comosi estos fueran 
    //  propiedades, es decir es diferente a la mayoria de lenguajes en donde se trata
    //  como lo que son realmente,metodos, debido a eso no se le pone el parentesis
    scooby.setRaza="Gran danés";+6
    console.log(scooby.getRaza);
