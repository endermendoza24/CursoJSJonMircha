// octavos ejercicios dle curso de programacion con javascript con jon Mircha

// sab 5 de febrero
// Viernes 11 de febrero de 2022

//  24. Programa una funcion que dado un arreglo de numeros devuelva un arreglo con dos arreglos, el primero debera tener los numero ordenados de forma ascendente y el segundo de forma descendiente.

const ordenarArreglo = (arr = undefined) =>{
    if(arr === undefined) return console.warn("No ingresaste un arreglo");

    if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es de tipo arreglo");
    if(arr.length === 0) return console.error("EL arreglo esta vacio");

    for(let num of arr){
        if(typeof num !== "number") return console.error(`El valor ${num} no es un numero`);
    }
    return console.info({
        arr,
        asc: arr.map(elemento => elemento).sort(),
        desc: arr.map(elemento => elemento).sort().reverse()
    });
}

ordenarArreglo([1,2,3,4,5,6,7,8,9]);



// 25. Programa una funcion que dado un arreglo de elmeentos elimine los dupolicados.

const quitarDuplicados = (arr = undefined)=>{
    if(arr === undefined) return console.warn("No ingresaste un arreglo");

    if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es de tipo arreglo");
    if(arr.length === 1) return console.error("EL arreglo esta vacio");

    return console.info({
        original:arr,
        sinDuplicados: arr.filter((value, index,self)=> self.indexOf(value)===index)
    })
}

quitarDuplicados([2,3,4,5,4,5,6]);

// 26. Programa una funcion que dado un arreglo de numeros  obtengas el promedio.

const arregloPromedio = (arr = undefined) => {
    if(arr === undefined) return console.warn("No ingresaste un arreglo");

    if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es de tipo arreglo");
    if(arr.length === 0) return console.error("EL arreglo esta vacio");

    for(let num of arr){
        if(typeof num !== "number") return console.error(`El valor ${num} no es un numero`);
    }   
    // Map, Filter y Reduce  crean un nuevo arreglo basado en el arreglo original
    return console.info(
        arr.reduce((total, num, index, arr) =>{
            total += num;
            if(index === arr.length - 1){
                return `El  promedio de ${arr.join(" + ")} es igual a ${total / arr.length}`;
            }else{
                return total;
            }
        })
    )

}

arregloPromedio([1,2,3,4,5,6,7,8,9,0])
