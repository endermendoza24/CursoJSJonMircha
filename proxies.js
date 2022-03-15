const persona = {
    nombre:"",
    apellido:"",
    edad:21
}

const manejador ={
    set(obj,prop,valor){
        if(Object.keys(obj).indexOf(prop) === -1){
            return console.error(`La propiedad ${prop} no existe en el objeto persona`);
        }

    obj[prop] = valor;
    }
}

const Ender = new Proxy(persona, manejador)

console.log(Ender);
Ender.nombre = "Endersson";
Ender.apellido = "Mendoza";
Ender.edad  = 21;
Ender.Twitter = "@mendalonso2405";
Ender.Facebook = "/facebook.com/enderssonmendoza";