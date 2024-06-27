// 1. Crie uma função que recebe um array com os nomes dos alunos de uma turma, e outro array que recebe a lista de presença com os nomes. Retorne uma lista com quais alunos faltaram.

function chamada(alunos, listaPresença) {
  let faltou = [];

  for (let i = 0; i < alunos.length; i++ ) {
    let  alunoPresente = false;
  
    for (let j = 0; j < listaPresença.length; j++) {
      if (alunos[i] === listaPresença[j]) {
       alunoPresente = true;
        break;
      }
    }
    if (!alunoPresente) {
      faltou.push(alunos[i]);
    
    }
  }
  return faltou;
}
let alunos = ["Marcelo", "Pedro", "Maria", "Camila"];
let listaPresença = ["Marcelo", "Camila", "Maria"];

let faltou = chamada(alunos, listaPresença);
console.log(faltou);



// 2. Crie uma função que recebe um array de números e retorna um array com todos os valores elevados ao quadrado.

function quadrado(numeros) {
  numerosAoQuadrado = []  
  for (let i = 0; i < numeros.length; i++) {
    numerosAoQuadrado.push(numeros[i] * 2);
  }
  return numerosAoQuadrado;
}
let numeros = [2, 4, 6, 8]
console.log(quadrado(numeros));

// 3. Crie uma função que recebe um array de nomes de arquivos, e recebe também uma extensão, a função deve retornar apenas os nomes de arquivo que forem dessa extensão.

function extensoes(arquivo, extensao) {
let arquivosCorretos = [];
for (let i = 0; i < arquivo.length; i++) {
  if (arquivo[i].endsWith(extensao)) {
    arquivosCorretos.push(arquivo[i]) ;
  };
};
return arquivosCorretos;
};

let arquivo = ["documento.doc", "musica.mp3", "arquivo.pdf", "executavel.exe", "sucesso.mp3"];
let extensao = ".mp3";
console.log(extensoes(arquivo, extensao));

// 4. Crie um array contendo os números de 1 a 10 e exiba-os no console com for-of e for comum.

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for ( let n of num) {
  console.log(n);
}

for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}

// 5. Crie uma função que recebe um array de strings como parâmetro e retorne um novo array apenas com as strings acima de 5 caracteres.

function palavra(palavras) {
  let palavrasCom5 = []
  for (let i = 0; i < palavras.length; i++) {
    if (palavras[i].length > 5) {
      palavrasCom5.push(palavras[i])
    }
  }
  return palavrasCom5
}
let palavras = ["Marcelo", "Casa", "Bola", "Curso", "Javascript"]
console.log(palavra(palavras));

// 6. Crie um array com 7 números. Percorra e indique qual o maior número deles.

let num2 = [5, 2, 4, 9, 12, 18, 13];
let maiorNumero = 0

for (let i = 0; i < num2.length; i++) {
  if (num2[i] > maiorNumero) {
    maiorNumero = num2[i]
  }
}
console.log(maiorNumero);

// 7. Crie uma função que extrai os dígitos verificadores de um cpf. Ex: "056.985.990-23" -> "23". Retorne apenas os dois últimos dígitos.

function digitoVerificador(cpf) {
 let doisDigitos = cpf.slice(12);
 return doisDigitos
}
let cpf = "056.985.990-23"
console.log(digitoVerificador(cpf));

// 8. Crie uma função que inverte uma string. Retorna ela invertida.

function stringInvertida(palavra) {
  let palavraInvertida = palavra.split("").reverse().join("");
  return palavraInvertida;
}
let palavra = "Marcelo";
console.log(stringInvertida(palavra));


// 9. Escreva uma função que receba uma palavra e um número. Retorne a palavra repetida a quantidade de vezes indicada pelo segundo parâmetro. Exemplo: repetir("batata", 3) -> "batatabatatabatata". OBS: Utilize um loop para resolver.

function repetirPalavra (palavraEscolhida, numeroEscolhido) {
  let palavraRepetida = "";
  for (let i = 1; i <= numeroEscolhido; i++) {
    palavraRepetida = palavraRepetida + palavraEscolhida;
  }
  return palavraRepetida;
}
let palavraEscolhida = "Marcelo";
let numeroEscolhido = 5;
console.log(repetirPalavra (palavraEscolhida, numeroEscolhido));


// 10. Escreva uma função que receba duas strings e retorne true se elas forem iguais ou false caso contrário.

function conferencia(palavra1, palavra2) {
  console.log(palavra1 === palavra2);
  return
}
let palavra1 = "Marcelo";
let palavra2 = "Reggiani";
console.log(conferencia(palavra1, palavra2));

// if (palavra1 === palavra2){
//   console.log("true");
// } else {
//   console.log("false");
// }

// 11. Crie uma função que recebe um dia, mês e ano dentro de um array. Retorna a data utilizando o separador que também será definido via parâmetros da função (-, / ou .). Ex: formatarData(array, '.') -> '20.06.2000'



// 12. Crie uma função que recebe um array, um valor de busca e um valor padrão. Caso o elemento exista no array retorne o elemento, caso contrário retorne o valor padrão definido via parâmetro. Ex: busca(array, 'batata', 'não tem batata') -> 'não tem batata'