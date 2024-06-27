// Array = Armazena multiplos valores, itens, elementos
// [] -> Array vazio
// [1, 2, 3, 4, 5] -> Array Preenchido, separando sempre os valores com virgula
// ["batata", "batata doce"] -> Array com strings

let figuras = ["coração", "estrela", "ok", "não", "joinha", "sorriso"];
console.log(figuras);

let = numeros = [1, 3.2, 5.4, 7.5, 9];
console.log(numeros);

// Acessando um elemento
console.log(figuras[1]);
console.log(figuras[5]);
console.log(numeros[4]);
console.log(numeros[1000]); //undefined

// Alterar os elementos do array
let notas = [6.5, 8.1, 9.0]
console.log("antes: " + notas);
notas[1] = 8.5;
notas[2] = notas[2] + 0.5;
notas[0]++;
console.log("Depois: " + notas);

// Tamanho do array (length)
let arr1 = [];
let arr2 = [1, 2, 3, 4];
console.log(arr1.length);
console.log(arr2.length);
console.log(arr2);

// Percorrer o array
for(let i = 0; i < arr2.length; i++) {
  console.log(i); // mostra o indice do array
}

let alunos = ["Alberto", "Ana", "Beatriz", "Carlos"];
for(let i = 0; i < alunos.length; i++) {
  console.log(`O aluno ${i} é ${alunos[i]}`);
}

// FOR-OF
let frutas = ["abacaxi", "laranja", "manga", "abacate"];
for(let f of frutas) {  // Percorre todos os elementos e a variavel F  assume cada um dos valores dos elementos por vez
  console.log(f);
}

let frutas1 = ["abacaxi", "laranja", "manga", "abacate"];
for(let i in frutas1) {
  console.log(frutas1[i]);
}