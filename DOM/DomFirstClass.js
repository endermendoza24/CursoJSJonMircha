console.log("***** ELEMENTOS DEL DOCUMENTO ****");
console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.charset)


// Metodos que ya no suelene usarse

console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("card"));
console.log(document.getElementById("menu"));
console.log(document.querySelector("menu")) // este recibe cualquier selector valido de css, si se pone clase o id se le debe de poner el # o el . respectivo
// a nivel de rendimiento el queery selector es más lento que el getElementById
// query selector solo trae el primer selector que se le hay especificado, si se quisieera traer todos, se debe de usar "querySelectorAll [este es el reemplazo de tagName, className y byName", también aceptnan mushcos metodos como, length, foreach etc...
    