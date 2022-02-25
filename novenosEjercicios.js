//  Novenos y últimos ejercicios de la primera parte del curso de Javascript con Jon Mircha
let a = 100 * 2;

// 27. Programa una clase llamada pelicula
/*
La clase recibira un objeto al momento de instanciarse con los siguientes datos: id de la pelicula en IMDB, titulo directror, año de streno, pais de origen, generos y calificacion en imdb
Todos los datos del objeto son obligatorios
Valida que el id imdb tenga 9 caracteres, los primeros dos sean letras los sietee restantes sean numeros.
Valida que el titulo no rerbaase l0os 100 caracteres
Valida que el director no rebase los 50 caracteres
Valida que el año de estreno sea de 4 digitos
Valida que el pais o paises sean introducidos en forma de arreglo
Valida wue los generos sean introducidos en forma de arreglo
valida que los generos introducidos estén dentro de los generos aceptados
Crea un metodo estatico que devuelva los generos aceptados
Valida que la calificacion sea un numero entre 0 y 10 pudiendo ser decimal de una posicion
A partir de un arreglo con la informacion de 3 peliculas genera 3 instancias de la clase de forma automatizada e imprimie la ficha tecnica de cada pelicula

Generos aceptados: Action, Adult, adventure, animation, biography, comedy, crime,  documentary, drama, family, fantasy, film noir, game-show, history, horror, musical, music
*/

class Pelicula{
    constructor(id, titulo, director, estreno, pais, generos, calificacion){
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;

        this.validarIMDB(id);
    }

    validarCadena(propiedad, valor){
        if(!valor) return console.warn(`${propiedad} ${valor} esta vacio`);

        if(typeof valor !== "string") return console.error(`${propiedad} ${valor} ingresado no es una cadena de texto`);

        return true;
    }


    validarIMDB(id){
        if(this.validarCadena("IMDB ID", id)){
            if(!(/^([a-z]){2}([0-9]){7}$/.test(id))){
                return console.error(`Imdb id ${id} no es valido, debe tener 9 caracteres, los dos primeros letras minusculas, los 7 restantes numeros`);
            }
        }
    }

}

const peli = new Pelicula({
    id: "ttk1234567"
});