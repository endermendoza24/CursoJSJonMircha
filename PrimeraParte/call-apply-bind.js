console.log(this.window);

this.lugar = "Contexto global";

function saludar(saludo, aQuien){
    console.log(` ${saludo}, ${aQuien} estamos en: ${this.lugar}`);
}

saludar();


const obj = {
    lugar:"Contexto global"
}

saludar.call(obj, "Hola","Endersson!!!");
saludar.apply(obj, ["Arrivederci", "Alnso"]);

const persona = {
    nombre:"Endersson",
    saludar: function (){
        console.log(`Hola ${this.nombre}`);
    }
}
persona.saludar();

const otraPersona = {
    saludar: persona.saludar
}

otraPersona.saludar();