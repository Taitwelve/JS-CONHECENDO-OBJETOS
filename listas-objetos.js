const estudante = {
    nome: 'José da Da Silva',
    idade: 30,
    cpf: "123.456.789-01",
    turma: 'JS-2025',
    bolsista: true,
    telefones: ["+55 27 99999-9999", "+55 27 88888-8888"],
    endereco: [{
        rua: "Rua das Flores",
        numero: "123",
        complemento: null,
        cidade: "Cachoeiro de Itapemirim",
        estado: "ES"
    }]
}



estudante.endereco.push({
    rua: "Avenida Brasil",
    numero: "456",
    complemento: "Apto 101",
    cidade: "Vila Velha",
    estado: "ES"
})

// console.log(estudante.endereco);
// console.log(estudante.endereco[1]);

const listaEnderecoComComplemento = estudante.endereco.filter(endereco => endereco.complemento);

console.log(listaEnderecoComComplemento);