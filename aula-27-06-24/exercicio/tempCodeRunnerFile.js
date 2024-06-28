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