let aleatorio = Math.round(Math.random() * 100 + 5);

const objUsuarios = {
    [`id_${aleatorio}`]:"Valor aleatorio"
}
const usuarios = ["Jon", "Irma", "Miguel", "Kala", "Kenai"];

usuarios.forEach((usuario, index) => objUsuarios[`id_${index}`] = usuario);

console.log(objUsuarios);

// Quede en el minuto 5:13,,,