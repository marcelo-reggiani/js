
// Map = cria um novo array com os resultados da função aplicada em cada elemento

const numeros = [3, 4, 9, 10];
// cada elemento do array, sera aplicado na função
const quadrados = numeros.map((n) => n**2); 
// o resultado será gerado em um novo array
console.log(quadrados);

const nomes = ["marcelo", "maria", "joão", "pedro"];
const nomesMaiusculo = nomes.map((nome) => nome.toUpperCase());
const nomesExclamacao = nomes.map((nome) => nome + "!");
console.log(nomes);
console.log(nomesMaiusculo);
console.log(nomesExclamacao);

// Exemplo use o map para transformar os valores do array abaixo
// se for par faz o numero * 2 se form impar faz o nunmero /2

const valores = [1, 2, 3, 4, 5, 6, 7];
const novoValores = valores.map((valor) => {
  if(valor % 2 === 0) {
    return valor * 2;
  } else {
    return valor / 2;
  }
});
console.log(novoValores);
