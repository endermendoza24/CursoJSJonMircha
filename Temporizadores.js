//  Curso de Javascript de  Jon Mircha
console.log("Inicio");
setTimeout(()=>{
    console.log("EJEcutando un setTimeOut esto se ejecuta una sola vez");
}, 10000);
// recibe un tiempo expresado en milisegundos


// setInterval(() =>{
//     console.log("EJecutando un setTimeout, esto se ejecuta varias veces");
// },1000);
// console.clear();

let temporizador = setTimeout(()=>{
    console.log(new Date().toLocale<TimeString());
},1000);

clearTimeout(temporizador);