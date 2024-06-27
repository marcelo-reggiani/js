let nums = [];
console.log(nums);

// Adiciona Elemento no Array   .PUSH adiciona o elemento no final do array
nums.push(4);
nums.push(5);
nums.push(10);
console.log(nums);
nums.push(1000);
console.log(nums);

// Removendo o elemento do Array    .POP  remove o ultimo elemento
nums.pop();
nums.pop();
console.log(nums);

// Adiciona Elemento no Array   .UNSHIFT  Adiciona o elemento no inicio do Array
let notas = [6.5, 7.9, 9.0];
console.log(notas);
notas.unshift(8.0);
notas.unshift(4.5);
console.log(notas);
notas.unshift(7.0);
console.log(notas);

// Removendo o elemento do Array   .SHIFT remove o elemento no inicio do Array
notas.shift();
notas.shift();
console.log(notas);

// Juntar o array e montar uma string    .JOIN() Une e transforma os elementos em string.  .JOIN("/") o parametro que vai substuir a virgula
let enderecoIP = [192, 168, 1, 1];
console.log(enderecoIP.join("."));
let data = ["27", "06", "2024"];
let dataString = data.join("/");
console.log(dataString);

// Concatenar Arrays
let p1 = ["Mouse", "Monitor", "Microfone"];
let p2 = ["Webcam", "Teclado"];
let p3 = p1.concat(p2);   //  Um novo array com os elementos dos arrays anteriores
console.log(p3);

// Reverter o Array  .REVERSE()  Ele tras os dados de tras para frente
let n = [1, 2, 3];
let nInvertido = n.reverse();
console.log(nInvertido);


// .INCLUDES Verifica se um determinado elemento esta dentro do Array
let pessoas = ["joão", "josé", "ana"];
if(pessoas.includes("josé")) {
  console.log("José Esta presente");
} else {
  console.log("José não esta presente");
}

// SPLIT divide uma string em um array de strings de acordo com algum separador - espaço " " ou / ou ""
let frase = "Eu vou estudar React";
let dataInicio = "26/06/2000";
let palavraEspecial = "BATATA";

let fraseArray = frase.split(" ");
console.log(fraseArray);
let dataInicioArray = dataInicio.split("/");
console.log(dataInicioArray);
let palavraEspecialArray = palavraEspecial.split("");
console.log(palavraEspecialArray);
console.log(palavraEspecialArray.reverse());

//Inverter a String
console.log(palavraEspecial.split("").reverse().join(""));

// indexOf Retorna o indice do elemento
let figuras1 = ["coração", "estrela", "ok", "não", "joinha", "sorriso"];
console.log(figuras1.indexOf("ok"));
console.log(figuras1.indexOf("joinha"));
console.log(figuras1.indexOf("batata")); // Quando não encontra o elemento no array. Devolve  -1

// SLICE ele fatia, o array e pega o pedaço informado. O parametro é o primeiro indice que deseja pegar e o indice posterior ao que deseja cortar
let figuras = ["coração", "estrela", "ok", "não", "joinha", "sorriso"];
let fig1 = figuras.slice(1, 3); // OBS. O ultimo elemento não entra. nesse exemplo pega o 1 e o 2
console.log(fig1);
let fig2 = figuras.slice(3);
console.log(fig2);


