console.log(this === window);


this.nombre = "Endersson"; // esta es una manera de crear 'variables'

function imprimir(){
    console.log(this.nombre);
}

imprimir();

const obj = {
    nombre: "contexto objeto",
    imprimir: function (){
        console.log(this.nombre);
    }
}
obj.imprimir();

const obje2 = {
    nombre:"COntexto objeto 2",
    imprimir:imprimir
}
obje2.imprimir();

const obj3 = {
    nombre: "contexto objeto 3",
    imprimir: () =>{
        console.log(this.nombre);
    }
}

obj3.imprimir();

function Persona(nombre){
    this.nombre = nombre;
    // return console.log(this.nombre);

    return function(){
        console.log(this.name);
    }



}
Persona("Jon");