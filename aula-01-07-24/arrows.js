
// Declaração de uma function
function soma(a, b) {
  return a + b;
}
let resultadoSoma = soma(10, 5);

// Arrow Function => mais concisa
const somaArrow = (a, b) => a + b;
let resultadoArrow = somaArrow(5 , 25);

// Arrow com corpo
const checarPar = (num) => {
  if (num % 2 ===0){
    console.log(`O número ${num} é Par`);
    return true;
  } else {
    console.log(`O número ${num} é Impar`);
    return false;
  }
}

// Transformando em Arrow
function compararString(str1, str2) {
  return str1 === str2;
}
console.log(compararString("Soulcode", "soulcode")); 
// Mesma função Agora com arrow
const compararString1 = (str3, str4) => str3 === str4;
console.log(compararString1("Soulcode", "soulcode"));

const soma2 = (a, b) => a + b;
const testeFuncao = () => 2 * soma2(5, 9); // uma função chamado o resultado de outra

// converter a função abaixo em arrow
function extrairDigitosVerificadores(cpf) {
  const partesCpf = cpf.split("-");
  return partesCpf[1];
}

const extrairDigitosVerificadores = (cpf) => {
  const partesCpf = cpf.split("-");
  return partesCpf[1];
}
const extrairDigitosVerificadores = (cpf) => cpf.split("-")[1];

// For Each -> Executa uma função para cada elemento no array

const numeros = [1,2, 3, 4, 5, 6, 7];
// for each é similar ao for of. veja abaixo
// numeros.forEach((n, i) => {
//   // n = elemento no array
//   // i = índice desse elemento
//   console.log(`O elemento no índice ${i} é ${n}`);
// });

// Exemplo somando todos os numeros de um array usando o FOR EACH
// let soma = 0;
// numeros.forEach((numero) => {
//   soma += numero;
// });
// console.log(soma);
// ou assim
numeros.forEach(numero => soma += numero);
console.log(soma);

// Converter a função em arrow e o for em for each
// function repetirPalavra(palavra, qt) {
//   let resultado = "";
//   for(let i = 0; i < qt; i++) {
//       resultado += palavra;
//   }
//   return resultado;
// }
// console.log(repetirPalavra("batata", 3));
const repetirPalavra = (palavra, qt) => {
  let resultado = "";
  for(let i = 0; i < qt; i++) {
      resultado += palavra;
  }
  return resultado;
}
//EXEMPLO CONVERTER A FUNCAO ABAIXO EM ARROW E FOR EACH
// function filtrarStrings(arr) {
//   let stringsFiltradas = [];
//   for(let str of arr) {
//       if(str.length > 5) {
//           stringsFiltradas.push(str);
//       }
//   }
//   return stringsFiltradas;
// }
const filtrarArquivos = (arr) => {
  let stringsFiltradas = [];
  arr.forEach((str) => {
    if (str.length > 5) {
      stringsFiltradas.push(str)
    }
  })
};


