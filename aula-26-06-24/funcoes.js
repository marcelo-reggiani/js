/*
  Funções

  function nome_da_funcao(parametros) {
    // Bloco de codigo da Função
  }

*/
// declarando uma função chamada boas vindas
function boasVindas() { // Escopo da função
  console.log("Seja bem-vindo(a)!");
  console.log("!!!!!!!!!!!!");
}
// chamada da função
boasVindas();

function exemplo02() {
  let a = 5;
  let b = 10;

  console.log(`A soma é ${a + b}`);
}
exemplo02();


let num1 = 2;
let num2 = 5;
function exemplo03() {
  console.log(`A soma é ${ num1 + num2}`);
}
exemplo03();
num1 = 10;
num2 = 7;
exemplo03();

// Parâmetros = entrada =  o que é necessário para executar

function soma(a, b) {
  console.log(`A soma de ${a} e ${b} é ${a + b}`);
}
soma(7, 3);
soma(17, 23);
soma(2, 8);

function media( n1, n2, n3) {
  let resultado = (n1 + n2 + n3) / 3;
  console.log(`A média é: ${resultado.toFixed(2)}`);
  // Retorno =  Saída da Função
  return resultado.toFixed(2);
}
let mediaAluno1 = media(7, 6, 9);
let mediaAluno2 = media(8, 10, 6);
let mediaAluno3 = media(4, 5, 7);

console.log("Valores retornados: ");
console.log(mediaAluno1);
console.log(mediaAluno2);
console.log(mediaAluno3);


function calcularImc(peso, altura) {
  console.log("função executado!");
  let icm = peso / (altura * altura)
  return icm.toFixed(2)
}
let icm1 =calcularImc(125, 1.81);
let icm2 =calcularImc(98, 1.81);
let icm3 =calcularImc(90, 1.81)
console.log(icm1);