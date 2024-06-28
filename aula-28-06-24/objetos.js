// OBJETOS ->  Servem para estruturar dados
/* 
    let variavel = {
        propriedade:  valor
        propriedade2: valor2
        propriedade3: valor3
        }
 */     

// nome, idade, peso, altura ( PROPRIEDADES DO OBJETO)

let pessoa1 = {
  nome: "José",
  idade: 29,
  peso: 70.5,
  altura: 1.75
};
let pessoa2 = {
  nome: "Maria",
  idade: 18,
  peso: 75.0,
  altura: 1.70
};

// ACESSO de propriedade
console.log(pessoa1.nome);
console.log(pessoa2.idade);
console.log(pessoa1["peso"]);
console.log(pessoa2["altura"]);
console.log(pessoa1.email);

// Adicionando propriedades ao objeto
pessoa1.cpf = "000.000.000-13"
pessoa1["email"] = "jose@email.com";
console.log(pessoa1);

// Alterar valores na propriedade
pessoa1.idade = 45;
pessoa2["idade"] = 19;
pessoa2["idade"] += 6; // Acrescenta +6 na idade da pessoa2
console.log(pessoa1);
console.log(pessoa2);

// Removendo propriedades
delete pessoa1.idade;
console.log(pessoa1);

// CONVERSAO DO JSON
//JSON.parse() É um método em JavaScript que converte uma string no formato JSON em um objeto JavaScript. Útil para transformar dados JSON recebidos de um servidor em um objeto manipulável no código.

//JSON.stringify() É um método em JavaScript que converte um objeto JavaScript em uma string no formato JSON. Útil para enviar dados de um objeto para um servidor ou para armazenamento.

console.log(JSON.stringify(pessoa2));