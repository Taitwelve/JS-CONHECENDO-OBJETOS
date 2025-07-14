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
console.log(objPersonagem);
delete objPersonagem.aliado;
delete objPersonagem["status"];
console.log(objPersonagem);

const delProp = delete objPersonagem.aliado;
const delPropInexistente = delete objPersonagem["endereco"];

console.log(delProp);
console.log(delPropInexistente);

//____________________________________________________________________________________

const pessoa = {
  nome: "Bruce Banner",
  dataNascimento: "25/01/1980",
  carteiraIdentidade: "997776-X",
  email: "profbanner@email.com",
  telefone: "+552877776666",
  cidade: "Cachoeiro de Itapemirim",
  estado: "ES",
};

pessoa.seguroSocial = "123-45-6789";
pessoa.cpf = "12345678900";
console.log(`CPF: ${pessoa.cpf.substring(0, 4)}... | Carteira de Identidade: ${pessoa.carteiraIdentidade.substring(0, 4)}...`);

//____________________________________________________________________________________

const pessoinha = {
  nome: "Tony Stark",
  idade: 45,
  solteiro: true,
  hobbies: ["tecnologia", "invenções", "filantropia"],
  mostrarInfoPessoinha: function (pessoinha) {
    return `Nome: ${pessoinha.nome}, Idade: ${pessoinha.idade}, Solteiro: ${pessoinha.solteiro}, Hobbies: ${pessoinha.hobbies.join(", ")}`;
  }
};

console.log(pessoinha.mostrarInfoPessoinha(pessoinha));

//____________________________________________________________________________________