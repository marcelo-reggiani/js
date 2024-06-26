// 1. Escreva um programa que inverte uma string
let nome = "Marcelo"
let nomeInvertido = ""
for (let i = nome.length - 1; i >= 0; i--) {
  //console.log(nome[i]);
  nomeInvertido = nomeInvertido + nome[i];
}
console.log(nomeInvertido);

// 2. Crie uma variável que armazena uma frase, e utilize as funcionalidades de string para remover uma palavra específica da frase e trocar por "###"
let frase = "O cardapio de hoje é: Arroz, Feijão, Frango Assado e Batata Frita. Sobremesa é Arroz Doce";
console.log(frase.replaceAll("Arroz", "###"));

// 3. Crie uma variável que armazena um email, o programa deve indicar se este email é do domínio soulcode.com
let email = "mreggiani@soulcode.com";
if(email.includes("soulcode.com")) {
  console.log("Este é um e-mail da Soulcode");
} else {
  console.log("Este não é um e-mail da Soulcode");
}
99135-1827