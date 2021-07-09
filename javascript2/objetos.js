// criando objeto do tipo pessoa

const pessoa = {
    nome: "Nathan",
    idade: 22,
    cidade: "Mauá"
}

// Notação de ponto

console.log(pessoa.nome)

// Notação de colchetes

console.log(pessoa['idade'])

// como desestruturar objetos

const {nome, idade, cidade} = pessoa
console.log(nome);
console.log(idade);
console.log(cidade);

const filmes = [
    {id: 1 , titulo: "Dilema das Redes", descricao: "Um documentário sobre tecnologia", duracao: 120},
    {id: 2 , titulo: "Us", descricao: "Um filme de terror legal demais", duracao: 120},
    {id: 3 , titulo: "Corra", descricao: "Um filme de suspense legal", duracao: 120},
]

const [{id, titulo, descricao, duracao}] = filmes
filmes.map(filme => console.log(filme.descricao));