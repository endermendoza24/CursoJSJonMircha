//  operador de cortocircuito

//  estos funcionan poniendo dos condiciones
//  ya sea poniendo el operador AND o el operador OR


function saludar(nombre){
    nombre = nombre || "desconocido";
    console.log(`Hola ${nombre}`);
}

saludar("Jon");
console.log("cadena" && "valor de la derecha");
console.log(1 || "valor de la derecha");
console.log(true || 'valor de la derecha');
console.log(false ||  'valor de la derecha');