const livros = require('./database.js')

// pegar o input
// se for simm, mostra as categorias disponíveis, pergunta qual categoria ela escolhe
// se não, mostra todos os livros em ordem crescente pela quantidade de páginas

const redline = require('readline-sync')

const entradaInicial = redline.question('Deseja buscar um livro? S/N ')

if (entradaInicial.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias disponíveis: ')
    console.log ('Produtividade e estilo de vida', '/ História brasileira', '/ Américas', 
    '/ Tecnologia', '/ Estilo de vida', '/ Autoavaliação', '/ Comportamento organizacional')
    
    const entradaCategoria = redline.question('Qual categoria você escolhe:')

    const retorno = livros.filter(livros => livros.categoria === entradaCategoria)
    console.table(retorno)
} else {
    const livrosOrdenados =  livros.sort((a,b) => a.paginas - b.paginas)
    console.log('Esses são todos os livros dispníveis')
    console.table(livrosOrdenados)
}