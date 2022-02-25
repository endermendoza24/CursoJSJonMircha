let mapa = new Map();

mapa.set("nombre", "valor");
mapa.set("apellido", "Mendoza");
mapa.set("edad",21);

console.log(mapa);
console.log(mapa.size);
console.log(mapa.has("edad"));
console.log(mapa.get("nombre"));
console.log(mapa.set("nombre", "Endersson"));;
console.log(mapa.get("nombre"));
mapa.delete("apellido");
mapa.set(19,"Nineteen");
console.log(mapa);


for(let[key,value] of mapa){
    console.log(`Llave: ${key} valor: ${value}`); 
}

const mapa2 = new Map([
    ["nombre","Alonso"],
    ["edad",7],
    ["animal","perro"],
    [null,"nulo"]
]);
console.log(mapa2);

const llavesMapas2 = [...mapa2.keys()];
const valoresMapas2 = [...mapa2.values()];
console.log(llavesMapas2);
console.log(valoresMapas2)