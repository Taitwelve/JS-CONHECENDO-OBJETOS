const livro = {
  nome: "JavaScript: The Good Parts",
  autor: "Douglas Crockford",
  anoPublicacao: 2008,
  genero: "Programação",
};
console.log(`Título: ${livro.nome}, Autor: ${livro.autor}, Ano de Publicação: ${livro.anoPublicacao}, Gênero: ${livro.genero}`);

livro.anoAtual = new Date().getFullYear();
console.log(livro);

livro.idadeDePublicacao = livro.anoAtual - livro.anoPublicacao;
console.log(`O livro "${livro.nome}" foi publicado há ${livro.idadeDePublicacao} anos.`);

const mostrarDetalhes = `Título: ${livro.nome}, Autor: ${livro.autor}, Ano de Publicação: ${livro.anoPublicacao}, Gênero: ${livro.genero}, Idade de Publicação: ${livro.idadeDePublicacao} anos`;
console.log(mostrarDetalhes);

console.log([livro.nome, livro.autor, livro.anoPublicacao, livro.genero, livro.idadeDePublicacao]);

livro.avaliacao = null;
console.log(livro);

livro.avaliacao = 6.5;
console.log(livro);

livro.genero = "Desenvolvimento Web";
console.log(livro);

delete livro.avaliacao;
console.log(livro);