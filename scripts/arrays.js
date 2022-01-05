// const a = [1, true, 'Hola', ['e','r']];
// console.log(a);


// const d = Array(100).fill('Endersson');
// console.log(d);

const colores = ['Rojo', 'Verde', 'Azul'];
colores.forEach(function(ei, index){
    document.write(`<li id="${index}">${ei}</li>`);
})