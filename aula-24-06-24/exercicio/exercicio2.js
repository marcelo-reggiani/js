/* 1. Defina 3 variáveis com notas de 0 a 10. Calcule a média das três notas. Em seguida mostre no console o status do aluno:
Maior ou igual 7 = Aprovado
Entre 5 e 7 = Reforço
Menor que 5 = Reprovação */

let nota1 = 4;
let nota2 = 5;
let nota3 = 5;

let media = (nota1 + nota2 + nota3) / 3;
if (media > 7) {
  console.log("Aprovado");
} else if (media >= 5 && media <= 7) {
  console.log("Reforço");
} else {
  console.log("Reprovação");
}

/*2. Simule a tabela do IMC com base no valor calculado pela formula: IMC = PESO / (ALTURA x ALTURA).
Indique o status com base no valor do IMC.*/

let peso = 125;
let altura = 1.81;
let imc = (peso / (altura * altura));

if (imc < 16) {
  console.log("Magreza Grave!");
} else if ( icm >= 16 && icm < 17) {
  console.log("Magreza Moderada");
} else if ( icm >= 17 && icm < 18.5) {
  console.log("Magreza Leve");
} else if ( icm >= 18.5 && icm < 25) {
  console.log("Peso Ideal");
} else if ( icm >= 25 && icm < 30) {
  console.log("Sobre Peso");
} else if ( icm >= 30 && icm < 35) {
  console.log("Obesidade Grau 1");
} else if ( icm >= 35) {
  console.log("Obesidade Grau 2");
}

// 3. Defina um número a e um número b. Verifica qual o maior, ou menor, ou se são iguais!

num1 = 5;
num2 = 8;
if (num1 === num2) {
  console.log("Numeros Iguais");
} else if (num1 > num2) {
  console.log("Num1 é Maior que Num2");
} else {
  console.log("Num2 é Maior que Num1");
}

/*4. Crie duas variáveis: salário e quantidadeDependentes. Siga a seguinte regra para aplicar ajustes salariais: Caso não possua dependentes não realizar ajustes no salário, se houver entre 1 e 5 aumentar em 30% o salário. Caso seja acima de 5 aumentar em 40% o salário.*/

let salario = 5000;
let quantidadeDependentes = 2;
let salarioReajustado = salario;

if (quantidadeDependentes === 0) {
  console.log("Sem dependentes, não reajustar salário");
} else if (quantidadeDependentes >= 1 && quantidadeDependentes <= 5) {
  salarioReajustado = salario + (salario * 0.30)
} else {
  salarioReajustado = salario + (salario * 0.40)
}
console.log(salarioReajustado);

/*5. Crie uma variável para armazenar um dia da semana (1 - Domingo, 2 - Segunda, ... 7 - Sábado). Com base no valor indique se é final de semana ou dia útil.*/

let diaSemana = 1;
if (diaSemana === 1 || diaSemana === 7) {
  console.log("Final de semana");
} else {
  console.log("Dia Útil");
}

/*6. Crie uma variável ano e verifique se este ano é bissexto. Um ano é bissexto quando: 
Caso 1) É um número divisível por 4, mas não é divisível por 100. 
Caso 2) É um número divisível por 4, por 100 e por 400.*/

let ano = 2020;
if (ano % 4 ===0 && ano % 100 !==0){
  console.log("É ano bissexto");
} else if (ano % 4 ===0 && ano % 100 ===0 && ano % 400 == 0) {
  console.log("É ano bissexto");
} else {
  console.log("Não é ano bissexto");
}

/*7. Crie uma variável idade. Caso seja uma idade inválida (negativa ou maior que 130) mostre uma mensagem de aviso.*/

let idade = 46;
if (idade < 0 || idade > 130) {
  console.log("Idade Inválida");
} else {
  console.log("Sua idade é: ", idade);
}

/*8. Crie uma variável com o turno de aula: M-matutino ou V-Vespertino ou N- Noturno. Mostre a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.*/

let turno = "N";
if (turno === "M") {
  console.log("Bom Dia!");
} else if ( turno === "V") {
  console.log("Boa tarde!");
} else if (turno === "N") {
  console.log("Boa noite");
} else {
  console.log("Valor Invalido");
}