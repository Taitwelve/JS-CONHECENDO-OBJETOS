const pet = {
  nome: "Rex",
  dataDeNascimento: "12/03/2017",
  brinquedoFavorito: "bolinha",
  cor: "cinza",
};

console.log(pet.dataDeNascimento);
console.log(pet["brinquedoFavorito"]);

//___________________________________________________________________________________

const objPersonagem = {
  nome: "Gandalf",
  classe: "mago",
  nivel: "20",
  aliado: {
    nome: "Saruman",
    classe: "mago",
  },
  status: "desaparecido",
};
console.log(objPersonagem)
delete objPersonagem.aliado
delete objPersonagem["status"] 
console.log(objPersonagem)