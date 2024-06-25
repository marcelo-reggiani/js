let peso = 125.0;
let altura = 1.81;
let imc = peso / altura ** 2;

console.log("Seu IMC é: ", imc.toFixed(2));

if (imc < 16) {
  console.log("Magreza Grave!");
} else if ( imc >= 16 && imc < 17) {
  console.log("Magreza Moderada");
} else if ( imc >= 17 && imc < 18.5) {
  console.log("Magreza Leve");
} else if ( imc >= 18.5 && imc < 25) {
  console.log("Peso Ideal");
} else if ( imc >= 25 && imc < 30) {
  console.log("Sobre Peso");
} else if ( imc >= 30 && imc < 35) {
  console.log("Obesidade Grau 1");
} else if ( imc >= 35) {
  console.log("Obesidade Grau 2");
}