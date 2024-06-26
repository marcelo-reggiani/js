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