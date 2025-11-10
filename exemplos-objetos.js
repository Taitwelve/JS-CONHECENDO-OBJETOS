//Object.keys() e Object.values(): são usados para extrair informações específicas de um objeto. 
// Esses métodos fornecem, respectivamente, as chaves e os valores presentes em um objeto. 
// São úteis para iterar ou fazer operações específicas em conjuntos de dados de um objeto.
const meuObjeto = { a: 1, b: 2, c: 3 };
const chaves = Object.keys(meuObjeto);
const valores = Object.values(meuObjeto);

console.log(chaves); 
console.log(valores); 

//Object.entries(): este método retorna um array de arrays que representam pares chave-valor. 
// É útil em situações que demandam iterações mais complexas ou manipulação mais minuciosa dos dados.

const meusObjetos = { a: 1, b: 2, c: 3 };
const entradas = Object.entries(meusObjetos);

console.log(entradas);

