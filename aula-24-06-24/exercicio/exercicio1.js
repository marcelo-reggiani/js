tempF = 99;
tempC = (tempF - 32) / 1.8;
console.log("Temperatura em Celsius é: ", tempC.toFixed(2) + "°C");


//  Segundo exercicio

let nota1 = 10;
let nota2 = 6;
let nota3 = 8;
let nota4 = 5;
let nota5 = 10;

let peso1 = 3;
let peso2 = 2;
let peso3 = 1;
let peso4 = 4;
let peso5 = 5;
let somaPeso = peso1 + peso2 + peso3 + peso4 + peso5;

let somaPonderada = (nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3) + (nota4 * peso4) + (nota5 * peso5);

let mediaPonderada = somaPonderada / somaPeso;
console.log("A média ponderada é: ", mediaPonderada);