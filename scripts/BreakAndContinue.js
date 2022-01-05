///  break y continue
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


for(let i = 0; i < numeros.length; i++){
    if(i === 5){
        break; //  al momento de poner el break el ciclo se detiene justo en 5, 'break', significa justamente eos 'romper'
    }
    document.write(numeros[i]);
}



for(let i = 0; i < numeros.length; i++){
    if(i === 5){
        continue; //  el continue hace que se ejecuten las siguientes opciones, pero sin incluir en donde se encuentra el propio continue, ejemplo aqui no se incluye el 6 
    }
    document.write(numeros[i]);
}

/* Break --> Detiene la ejecución de un bucle y se sale de él */

/*Continue --> Sirve para  detener la iteración actual y volver al principio  del bucle para realizar otra iteración, si corresponde */




 imprimir numeros pares

for(let i = 0; i <100; i++){
    if(i % 2 == 0){
        document.write(i + "<br>");
    }
}
