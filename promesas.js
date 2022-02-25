// Promesas en Javascript
// estas son una alternativa a los callback, para evitar que se generen las piramides del infierno, o llamadas Pyramid hell
//  son como if-else
// si la promesa se cumple se ejcuta el result, s falla, se ejecuta el segundo metodo que es el reject

//  veamos este ejemplo elevando numeros al cuadrado

function cuadradoPromise(value, callback){
    if(typeof value !== "number"){
        return Promise.reject(`Error, el valor ${value} ingresado no es un numero`);
    }
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve({
                value,
                result: value * value
            });
         }, 0|Math.random() * 1000);
    });
    
}

cuadradoPromise(1)
    .then((obj)=>{
        console.log("Inicio promise");
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(1);
    })
    .then(obj=>{
       
            
            console.log(`Promise: ${obj.value}, ${obj.result}`);
            return cuadradoPromise(2);
    })
    .then(obj=>{
       
            
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(3);
})
.then(obj=>{
       
            
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(4);
})
.then(obj=>{
       
            
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(5);
})
.then(obj=>{
       
            
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    console.log("Fin promesa");
})
    .catch(err => console.error(err));

    //  estudiar más este tema, junto a el de los callback, porque no le entendi muy bien, tengo que qudar muy claro porque creo que esto se usa en react