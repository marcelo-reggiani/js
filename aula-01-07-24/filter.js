// FILTER =  Cria um novo array com todos os elementos que passarem no teste da função

const notas = [7.0, 4.0, 5.5, 9.0, 8.4, 10.0];
const notasAcima7 = notas.filter((nota) => nota > 7);
console.log(notasAcima7);

// Exemplo Filtro de arquivos
let arquivosPasta = ["codigo.js", "estilos.css", "index.html", "sobre.html"];
let extensao = ".html";
const arquvosHtml = arquivosPasta.filter((arquivo) => arquivo.endsWith(extensao));
console.log(arquvosHtml);

// Exemplo lista de presença
let turma = ["José Almir", "Gabriel Braga", "Victor Icoma", "Igor Gondim", "Bismark"];
let presenca = ["Gabriel Braga", "Victor Icoma", "Bismark"];

const ausentes = turma.filter((aluno) => !presenca.includes(aluno));
console.log(ausentes);

// Exemplo  Filtrar palavras acima de 5 caracteres
let palavras = ["batata", "pão", "arroz", "carne", "ovo", "alface"];
let palavrasAcima5 = palavras.filter((palavra) => palavra.length > 5);
console.log(palavrasAcima5);