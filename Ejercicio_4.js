const nombre = prompt("Name");
const añoNacimiento = parseInt(prompt("Birthyear"));

const fechaActual = new Date();
const añoActual = fechaActual.getFullYear();
const edad = añoActual - añoNacimiento;

console.log(`Hola, ${nombre}! su edad es ${edad} años `);
