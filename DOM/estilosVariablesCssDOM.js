// console.clear();
// console.log("hola");
// const $linkDOM = document.querySelector(".link-dom");
// console.log($linkDOM.style); // se recomienda acceder con la notacion de punto

// console.log($linkDOM.getAttribute("style"));
// // para acceder a una propiedad en particular
// console.log($linkDOM.style.backgroundColor);
// console.clear();
// console.log(window.getComputedStyle($linkDOM));

// $linkDOM.style.setProperty("text-decoration", "none"); // aqui si aplica la sintaxis normal de css
// $linkDOM.style.setProperty("diplay", "block");

// $linkDOM.style.width = "50%";
// $linkDOM.style.textAlign = "center";
// $linkDOM.style.marginLeft = "auto;"
// $linkDOM.style.marginRight = "auto";
// $linkDOM.style.padding ="1rem";
// $linkDOM.style.borderRadius = ".5rem";

// console.log($linkDOM.style);

// // quedé en el minuito 16:50
// //  Variables css - custom propierties
// const $html = document.documentElement, 
// $body = document.body;

// let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
// varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");
// console.log(varDarkColor, varYellowColor);

// $body.style.backgroundColor = varDarkColor;
// $body.style.color = varYellowColor;

// $html.style.setProperty("--dark-color", "#000");
// varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

// $body.style.setProperty("background-color",varDarkColor);s


// const $card = document.querySelector(".card");

// console.log($card);
// console.log($card.classList.contains("rotate-45")) // esto devuelve un domTokenList
// console.log($card.classList.add("rotate-45"));
// $card.classList.remove("rotate-45");
// $card.classList.replace("rotate-45","rotate-135");

const $whatIsDOM = document.getElementById("que-es");

let text = `
<p> El modelo de objetos del documento (<b><i>DOM -documentos HTML y XML) </p>
<p>Este provee una representacion estrictural del documento, permitiendo modificar su contenido y presentacion visual mediante codigo js</p>
<mark>El Dom no es parte de la especificacion de javascript, es una API para los navegadores</mark>
`

// innerText no es parte del estandar
$whatIsDOM.innerText = text;
// textContent es la que forma parte del estandar
// estas solo muestran texto, sin contenido html
// la que muestra contenido de html es innerHTML
// cuando usar cada una:
// outerHTML reemplaza al parrafo

