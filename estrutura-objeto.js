const estudante = {
    nome: 'José da Da Silva',
    idade: 30,
    cpf: "123.456.789-01",
    turma: 'JS-2025'
}

console.log(estudante);
console.log(estudante.nome);
console.log(`O nome do estudante é ${estudante.nome} e ele tem ${estudante.idade} anos.`);
console.log(`Os três primeiros números do CPF do estudante são ${estudante.cpf.substring(0, 3)}.`);


//O objeto é sempre composto por chave:valor (Key:Value)
// O método substring só pode ser usado em strings, então é importante garantir que o valor de cpf seja uma string ou convertê-lo antes de usar o método.