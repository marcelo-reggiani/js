/* 
  Operadores Lógicos - Boolean
    && -  E (AND)
    || - OU (OR)
    ! - NÃO (NOT)
*/
/*
console.log(true);
console.log(false);

// AND (&&) se tiver um falso a expressão toda é falsa
console.log(true && true); // true
console.log(true && false); // false
console.log(true && true && true && false); // false
console.log(false && true); // false
console.log(false && false); // false
// OR (||) se tiver um verdadeiro a expressao toda é verdadeira
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(true || false || false || false); // true
console.log(false || false); // false
// NOT (!) inverte o sinal. Se for true vira falso e se for falso vira true a condição
console.log(!true); // false
console.log(!false); // true

// ORDEM DE EXECUÇÃO :   PRIMEIR  (!)  depois  (&&)  e depois  (||)
console.log(!true || false); // false
console.log(true || true && false); // true
console.log(!false && true || false); // true

*/

let idade = 80;
// Idade entre 18 e 59 anos
console.log(idade >= 18 && idade <= 59);

let media = 7.0;
let sabeIngles = true;
let aprovado = media >= 7.0;
console.log(aprovado);

let contratado = aprovado && sabeIngles;
console.log(contratado);

let reprovado = !aprovado; // Inverte o ovalor lógico dentro de aprovado