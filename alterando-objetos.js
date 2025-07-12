const estudante = {
    nome: 'José da Da Silva',
    idade: 30,
    cpf: "123.456.789-01",
    turma: 'JS-2025'
}
estudante.estadoCivil = 'Solteiro'; 
console.log(estudante.estadoCivil); 
console.log(estudante);

estudante.idade = 31;
console.log(estudante);

const estudante2 = {}
estudante2.nome = 'Maria da Silva';
estudante2.idade = 28;
console.log(estudante2);



// Um objeto não é ordenado, então não podemos garantir a ordem de exibição das propriedades