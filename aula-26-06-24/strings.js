// Strings = Cadeias de Caracteres

const nome = "Marcelo"
const sobrenome = 'Reggiani'

// Interpolação de string
const nomeCompleto = `${nome} ${sobrenome}`;
console.log(nomeCompleto);

// Formação de Strings

let meuPet = "Bios Dog"; // os Indiçes vão 0 a 7.  espaço conta
// 0 -> "B"  // 1 -> "i"  // 2 -> "o"  // 3 -> "s""

console.log(meuPet[0]);
console.log(meuPet[1]);
console.log(meuPet[2]);
console.log(meuPet[3]);
console.log(meuPet[4]);
console.log(meuPet[5]);
console.log(meuPet[6]);
console.log(meuPet[7]);
console.log(meuPet[500]); // undefinied =  não existe essa posição na string

// Para saber o  Tamanho da String  usa o .length   EXEMPLO
console.log(meuPet.length);

// Percorrendo a string caractere por caractere
for (let i = 0; i < meuPet.length; i++) {
  //console.log(i);
  console.log(meuPet[i]); // Mostra um caractere por vez
}

// Funções de String
let palavra = "Java Script";
console.log(palavra.toLocaleLowerCase()); // Minuscula
let palavraMin = palavra.toLocaleLowerCase();
console.log(palavraMin);
console.log(palavra.toLocaleUpperCase()); // Maiuscula

console.log(palavra.charAt(0)); // palavra no indice 0.  Seria o mesmo que palavra[0]

console.log(palavra.replace("Java", "Type"));
console.log(palavra.replace("J", "R"));
console.log(palavra.replaceAll("a", "x"));

let frase = "Eu comi arroz, feijão, batata e carne";
console.log(frase.includes("carne")); // true
console.log(frase.includes("alface")); // false

if(frase.includes("alface")) {
  console.log("Muito Bem");
} else {
  console.log("Coma algo saudável");
}

let arquivo = "musica.mp3"
console.log(arquivo.endsWith("mp3")); //verifica se termina com 'mp3
console.log(arquivo.endsWith("mp4"));
console.log(arquivo.startsWith("mus")); // verifica se começa com mus

// Slice
console.log(arquivo.slice(0, 3)); // recorta a string do indice 0 até o 3. lembrando que o 3 não entra. ficaria MUS
console.log(arquivo.slice(0, 4));
console.log(arquivo.slice(4, 6));
