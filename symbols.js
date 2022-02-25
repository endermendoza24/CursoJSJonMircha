let id = Symbol("id");
let id2 = Symbol("id");

console.log(id === id2);

console.log(id, id2);

const NOMBRE = Symbol();

const persona = {
    [NOMBRE]:"Ender"
}

console.log(persona);

persona.NOMBRE = "Endersson Mendoza";

console.log(persona);

console.log(persona[NOMBRE]);

persona[SALUDAR] = function () {
    console.log("Hola");
}

console.log(persona);

// si comparamos esto, obviamente javascript dira que es true, debido a que la comparacion dice que ambas variables eon exactamente iguiales. Debido a esto es se usa symbol, que basicamente lo que hace es crear un identificador a cada variable, haciendo esto al comprararlas se retornará un false porque tecnicamente no soniguales ya que cada una tiene un identificador distinto.