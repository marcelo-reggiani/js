/* Estruturas condicionais (If - Else)

  if (condicao) {
    // instruções caso verdadeiro
  } else {
      // instruções caso falso 
  }

*/

idade = 18;
if (idade >= 18) { 
  console.log("Vc é maior de 18 anos");
} else {
  console.log("Vc é menor de 18 anos");
}

let media = 7.0;
let sabeIngles = true
let aprovado = media >= 7.0;

if (aprovado) {
  console.log("Parabéns você foi Aprovado!");
} else {
  console.log("Que pena você foi reprovado");
}

if (aprovado && sabeIngles) {
  console.log("Parabéns você foi contratado");
} else {
  console.log("Que pena, fica para uma próxima");
}

console.log("FIM");

// positivo, negativo ou zero

let numero = 10;

if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é 0.");
}
console.log("FIM");

let n = 7;
if (n % 2 == 0) {
  console.log("O numero é par");
} else {
  console.log("O numero é Impar");
}

console.log("FIM");

// 1 - Domingo, 2 - Segunda, 3 - Terça, 4 - Quarta, 5 - Quinta, 6 - Sexta, 7 - Sabado
let dia = 5;
if (dia == 1) {
  console.log("Hoje é Domingo");
} else if ( dia === 2) {
  console.log("Hoje é Segunda");
} else if ( dia === 3) {
  console.log("Hoje é Terça");
} else if ( dia === 4) {
  console.log("Hoje é Quarta");
} else if ( dia === 5) {
  console.log("Hoje é Quinta");
} else if ( dia === 6) {
  console.log("Hoje é Sexta");
} else if (dia === 7) {
  console.log("Hoje é Sábado");
} else {
  console.log("Não existe esse Dia da Semana!");
}

console.log("FIM");