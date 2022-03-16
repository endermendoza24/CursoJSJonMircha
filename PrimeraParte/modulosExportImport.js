//  modulos para exportar e importar een javascript

//  modulos es poder llamar un archivo de javascript desde otro archivo de javascript
//  de la manera en que lo hace por ejemplo C#
import saludar, {pass, PI, user} from "./constantes.js"; //  siempre se debe de poner ./ al momento de poner las rutas
import {aritmetica} from "./aritmetica.js";

console.log(aritmetica.sumar(3,4));
saludar();

console.log(`La constante es ${PI} y el usuario es: ${user} y su contraseña ${pass}`);


