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

// infoPessoa.js
const pessoinha = {
    nome: "Ana",
    idade: 25,
    solteiro: true,
    hobbies: ["Leitura", "Caminhada", "Fotografia"],
    endereco: {
        rua: "Rua Principal",
        cidade: "Cidade Feliz",
        estado: "Estado Alegre"
    }
};

function mostrarInfoPessoa(pessoinha) {
    console.log("Informações da Pessoa:");
    console.log(`Nome: ${pessoinha.nome} (Tipo: ${typeof pessoinha.nome})`);
    console.log(`Idade: ${pessoinha.idade} anos (Tipo: ${typeof pessoinha.idade})`);
    console.log(`Solteiro: ${pessoinha.solteiro} (Tipo: ${typeof pessoinha.solteiro})`);
    console.log(`Hobbies: ${pessoinha.hobbies.join(", ")} (Tipo: ${typeof pessoinha.hobbies})`);
    console.log("Endereço:");
    console.log(`Rua: ${pessoinha.endereco.rua}`);
    console.log(`Cidade: ${pessoinha.endereco.cidade}`);
    console.log(`Estado: ${pessoinha.endereco.estado}`);
}

// Chamada da função mostrarInfoPessoa
mostrarInfoPessoa(pessoinha);
