const estudante = {
    nome: 'José da Da Silva',
    idade: 30,
    cpf: "123.456.789-01",
    turma: 'JS-2025',
    bolsista: true,
    telefones: ["+55 27 99999-9999", "+55 27 88888-8888"],
    media: 8.5,
    estaAprovado: function (mediaBase) 
    {
        return this.media >= mediaBase ? true : false;
    }
}

console.log(estudante.estaAprovado(7.0)); 

//Método é uma função executada dentro do contexto de um objeto

//Ao trabalhar com objetos em Node.js, é crucial compreender o comportamento de this para garantir referências corretas. Arrow functions podem ser inadequadas em certos contextos, especialmente ao definir métodos de objetos. Em vez disso, opte por funções tradicionais ao criar métodos em objetos para garantir que this seja vinculado ao contexto apropriado, facilitando o acesso e manipulação de dados de forma consistente.