// 1. Crie uma função para calcular e retorna o IMC, e outra função que recebe o valor de IMC e indica o status no terminal.

function calcularImc(peso, altura) {
  let imc = peso / (altura * altura);
  return imc.toFixed(2);
}
let icmPessoa = calcularImc(125, 1.81);
console.log(icmPessoa);

function icmResultado(icmPessoa) {
  let resultado = ""
  if (icmPessoa < 16) {
    resultado = console.log("Magreza Grave!");
  } else if ( icmPessoa >= 16 && icmPessoa < 17) {
    resultado = console.log("Magreza Moderada");
  } else if ( icmPessoa >= 17 && icmPessoa < 18.5) {
    resultado = console.log("Magreza Leve");
  } else if ( icmPessoa >= 18.5 && icmPessoa < 25) {
    resultado = console.log("Peso Ideal");
  } else if ( icmPessoa >= 25 && icmPessoa < 30) {
    resultado = console.log("Sobre Peso");
  } else if ( icmPessoa >= 30 && icmPessoa < 35) {
    resultado = console.log("Obesidade Grau 1");
  } else if ( icmPessoa >= 35) {
    resultado = console.log("Obesidade Grau 2");
  }
  return resultado;
}
console.log(icmResultado(icmPessoa));


// 2. Crie uma função que recebe um número (PARÂMETRO) de 0 a 1. E RETORNA em porcentagem: percentual(0.456) -> 45.6%

function porcentagem(percentual) {
  return percentual*100
}
console.log(`A porcentagem é: ${porcentagem(0.456)} %`);


// 3. Crie uma função que recebe um número (PARÂMETRO). E RETORNA se ele é negativo (true ou false). Ex: ehNegativo(-2) ===> true

function numero(num1) {
  let resultado = ""
  if (num1 >= 0) {
    resultado = console.log("É Positivo");
  } else {
    resultado = console.log("É Negativo");
  }
  return resultado ;
}
numero(-5)
console.log(numero);


// 4. Crie uma função que conte até um número passado por parâmetro. Exemplo: contar(5) -> 1 até 5, contar(1000) -> 1 até 1000. OBS: Não possui retorno.

function contador(num1) {
  for (let i = 1; i <= num1; i++) {
    console.log(i);
  }
  return
}
contador(5)


// 5. Crie uma função que recebe um nome e sobrenome. RETORNA o nome completo como resultado.

function nomeCompleto(nome, sobrenome) {
   return nome + " " + sobrenome;
}
console.log(nomeCompleto("Marcelo", "Reggiani"));


// 6. Crie uma função para calcular a área de um circulo = PI * R * R. Considere PI = 3.14.
function calcRaio(R) {
  const PI = 3.14
  let calculo = PI * R * R;
  return calculo;
}
console.log(`A área do circulo é? ${calcRaio(2)}`);

/* 7. Crie uma função que recebe a área de um circulo e mostra o nível:
   Entre 1 e 20 => Nível I     Entre 21 e 40 => Nível II     Qualquer outro diâmetro => Nível inválido*/
  function determinarNivel(area) {
    if (area >= 1 && area <= 20) {
      console.log("Nível I");
    } else if (area >= 21 && area <= 40) {
      console.log("Nível II");
    } else {
      console.log("Nível inválido");
    }
  }
let areaCirculo = calcRaio(2);
console.log("Área do círculo:", areaCirculo);
determinarNivel(areaCirculo);


// 8. Escreva uma função que receba uma string e retorne a mesma string em letras minúsculas.

function minuscula(palavra) {
  return palavra.toLowerCase();
}
console.log(minuscula("O rato Roeu A roupa do Rei de roma"));


// 9. Escreva uma função que receba uma string e um caractere e retorne o número de ocorrências desse caractere na string.

function cnotarCaracteres(palavra, caractere) {
  let ocorrencias = 0;
  for (let i = 0; i < palavra.length; i++) {
      if(palavra[i] === caractere) {
        ocorrencias++
      }
  }
  return ocorrencias
}
console.log(cnotarCaracteres("batata", "a"));