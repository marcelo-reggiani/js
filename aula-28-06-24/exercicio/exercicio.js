// Exercício 1: Escreva uma função que receba um array de números e retorne um novo array contendo apenas os números pares.

/* criei um for na função para percorrer o array e coloquei um if para tirar o mod de cada numero para separar os numeros pares e adicionando em um array especifico para os numeros pares */
function par(pares) {
  let numerosPares = [];
  for ( num of pares) {
    if (num % 2 === 0) { 
      numerosPares.push(num);
    }
  }
  return numerosPares
}
let pares = [1, 8, 5, 13, 4, 26];
console.log(par(pares));

// Exercício 2: Escreva uma função que receba um array de números e retorne a soma de todos os números.

/* Criei um for para percorrer o array e uma variavél para receber a soma dos numeros dentro do array */
function soma(numeros) {
  let numerosSomados = 0;
    for (let i = 0; i < numeros.length; i++) {
      numerosSomados = numerosSomados + numeros[i];
    }
  return numerosSomados
}
let numeros = [2, 4, 6]
console.log(soma(numeros));

// Exercício 3: Escreva uma função que verifique se uma string é um palíndromo (ou seja, a string é igual quando lida de trás para frente). ARARA -> Palíndromo.

/* Criei uma variável para receber a palavra invertida usando o split, reverse e o join para juntar toda a palavra novamente e depois criei um if para comprar se a palavra invertida era igual a palavra inicial . OBS. Tentei transformar tudo em toLowerCase  para poder comparar mesmo que fosse com o A maiusculo ou minusculo mas não deu certo. Deixei sem ela mesmo*/
function verificacao(palavra) {
 let palavraInvertida = palavra.split("").reverse().join("")
 if (palavraInvertida === palavra) {
  console.log(`${palavra} É um Palíndromo!`);
 } else {
  console.log(`${palavra} NÃO é um Palíndromo!`);
 }
 return palavraInvertida;
}
let palavra = "ARARA";
console.log(verificacao(palavra));


// Exercício 4: Escreva uma função que conte o número de vogais em uma string. Dica: Você pode usar um array com todas as vogais possíveis e verificar cada letra da string para ir contando.


// Exercício 5: Escreva uma função que receba um array de números e retorne o menor número do array.

/* Criei uma ´variavel para armazenar o menor numero e atribuir um valor alto a ele.  Usei um for para percorrer o array de numeros e fazer a comparação numero a numero com o a variavel menorNumero. Armazenando sempre o menor */
function menor(numero) {
let menorNumero = 100
  for (let i = 0; i < numero.length; i++) {
    if (numero[i] < menorNumero) {
      menorNumero = numero[i]
    }
  }
  return menorNumero
}
let numero = [5, 2, 4, 9, 12, 18, 13];
console.log(menor(numero));


// Exercício 6: Escreva uma função que calcule a média dos números em um array. [7.0, 8.0, 9.0] -> (7.0 + 8.0 + 9.0) / 3

/* Criei as variáveis para receber a soma das notas e a quantidade de notas. Feito isso criei um for para somar as notas e o numero de notas informadas. Feito isso divir o total das notas pela quantidade d notas */
function media(notas) {
  let somaNotas = 0;
  let qtdNotas = 0
  for (let i = 0; i < notas.length; i++) {
    somaNotas = somaNotas + notas[i];
    qtdNotas = i + 1
  }
  return mediaNotas = somaNotas / qtdNotas
}
let notas = [7.8, 6.9, 10, 4.5]
console.log(`A média das notas é: ${media(notas)}`);

// Exercício 7: Escreva uma função que conte a frequência de cada caractere em uma string. Dica: use objetos para guardar as contagens de cada caractere.


// Exercício 8: Escreva uma função que recebe um email, e ofusca parte do seu endereço. Por exemplo: jose.almir@dev.com -> j*********@dev.com.

const ofuscarEmail1 = (email) => {
  const partes = email.split("@");
  const usuario = partes[0];
  const dominio = partes[1];

  return usuario[0] + "*******" + "@" + dominio;
}
console.log(ofuscarEmail1("marcelo.reggiani@dev.com")); 

// DESESTRUTURAÇÃO
const ofuscarEmail = (email) => {
  const [usuario, dominio] = email.split("@"); // O valor do indice 0 é armazenado na variavel usuario e o valor do indice 1 na variavel dominio
  return usuario[0] + "*******" + "@" + dominio;
}
console.log(ofuscarEmail("marcelo.reggiani@dev.com")); 

// EXEMPLO de desestruturação de array
const [nome1, nome2, nome3, nome4] = ["Almir", "Marcelo", "Cristiane", "Victor"];
console.log(nome1);
console.log(nome2, nome4);


