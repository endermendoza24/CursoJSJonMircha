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
    
console.log(document.querySelector(".link-dom").getAttribute("href")); // esto obtiene el link establecido en el html

// establecer unnuevo valor
document.documentElement.lang = "en";
console.log(document.documentElement.lang);
console.log(document.documentElement.setAttribute.lang
    )

const  $linkDOM = document.querySelector(".link-dom");// no hay problema que sea let y const, aunque es preferible tratandose del tema de DOM guardar las cosas en Const

$linkDOM.setAttribute("target","_blank"); // esto hará que se abra en otra página el link presionado.
$linkDOM.setAttribute("href","https://facebook.com/endersson.mendoza/");


$linkDOM.getAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

// data-attributes

console.log($linkDOM.getAttribute("data-description")); // se guardan a manera de maṕa en un dataSet

console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "Moelo de objeto del documento");
$linkDOM.dataset.description = "Suscribete a mi TikTok ";


