//  Expresiones regulares en javascript
//  las  expresiones regulares  son una secuencia de caracteres que forman un patron

let resultado =20;
let cadena = "lorem ipsum sicut dolor atmet";
 const ExpReg = RegExp("lorem",""); //  primer parametro el patron, segundo parametro las banderas

let expReg2 = /lorem/;

console.log(ExpReg.test(cadena));

if(ExpReg.test(cadena) == true){
    resultado = 30;
}

console.log(`El valor de resultado es ${resultado}`)