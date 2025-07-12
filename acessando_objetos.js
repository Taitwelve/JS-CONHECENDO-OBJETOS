const estudante = {
    nome: 'José da Da Silva',
    idade: 30,
    cpf: "123.456.789-01",
    turma: 'JS-2025'
}

estudante.nome

function exibeInfoEstudante(objEstudante, infoEstudante) {
    return objEstudante[infoEstudante];
}

console.log(estudante.pet);
console.log(estudante['pet']);
console.log(estudante['nome']);
console.log(estudante['cpf']);
console.log (exibeInfoEstudante(estudante, 'nome'));
console.log (exibeInfoEstudante(estudante, 'cpf'));
