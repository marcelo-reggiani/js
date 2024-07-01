// 1. Crie uma função arrow que recebe dois números e retorna o maior deles.

const numeroMaior = (num1, num2) => {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}
console.log(numeroMaior(10, 9));

// 2. Dado um array de palavras, use forEach para imprimir cada palavra com a primeira letra em maiúscula.

let palavras = ["marcelo", "casa", "praia", "javascript", "react"];
palavras.forEach((palavra) => {
    let palavraCorrigida = palavra[0].toUpperCase() + palavra.slice(1)
    console.log(palavraCorrigida);
});

// 3. Use map para transformar um array de números, multiplicando cada número por 5.

const numeros = [5, 10, 1, 50];
const numerosVezes5 = numeros.map((n) => n * 5); 
console.log(numerosVezes5);

// 4. Dado um array de idades, use filter para retornar apenas as idades maiores ou iguais a 18.

const idades = [10, 14, 50, 19, 18];
const maiorIdade = idades.filter((idade) => idade >= 18);
console.log(maiorIdade);

// 5. Dado um objeto representando um livro, que contém título, autor, e um objeto aninhado com informações de publicação (editora, ano), acesse o nome da editora.

let livro = {
    titulo: "A volta dos que não foram",
    autor: "goku",
    publicacao: {
        editora: "Planeta Vedita",
        ano: 2018,
    }
}
console.log(livro.publicacao.editora);

// 6. Crie um array de frutas e use a desestruturação para extrair a primeira e a segunda fruta em variáveis separadas.

let [fruta1, fruta2, fruta3, fruta4] = ["Banana", "Manga", "Pera", "Maça"];
console.log(fruta1);
console.log(fruta2);

// 7. Tente adaptar os exercícios da atividade da semana 03 para utilizar arrow function, forEach, map e filter.

