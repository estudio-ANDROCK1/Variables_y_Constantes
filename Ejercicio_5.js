const peso = parseFloat(prompt("Peso"));
const altura = parseFloat(prompt("Altura"));

const imc = peso / (altura**2);

console.log(`Tu IMC es ${imc.toFixed(2)}`);

