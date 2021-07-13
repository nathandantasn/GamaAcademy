const livros = require('./database.js')

// pegar o input
// se for sim, mostra as categorias disponíveis, pergunta qual categoria ela escolhe
// se não, mostra todos os livros em ordem crescente pela quantidade de páginas

const redline = require('readline-sync')

const entradaInicial = redline.question('Deseja buscar um livro? S/N ')

while (entradaInicial.toLocaleUpperCase() === 'S'){

    if (entradaInicial.toLocaleUpperCase() === 'S'){
        console.log('Busque por categoria, nome do autor ou nome do livro: ')
    
        const entrada = redline.question('Digite aqui o filtro de busca: ')

        if(entrada.toLocaleLowerCase() === 'categoria'){
            const entrada2 = redline.question('Digite a categoria do livro: ')
            const retorno = livros.filter(livros => livros.categoria === entrada2);
            console.table(retorno)
        } else if(entrada.toLocaleLowerCase() === 'autor'){
            let entrada2 = redline.question('Digite o nome do autor do livro: ')
            const retorno = livros.filter(livros => livros.autor === entrada2);
            console.table(retorno)
        } else if(entrada.toLocaleLowerCase() === 'nome'){
            const entrada2 = redline.question('Digite o nome do livro: ')
            const retorno = livros.filter(livros => livros.nome === entrada2);
            console.table(retorno)
        } else {
            console.log('Não temos este livro, por favor, tente buscar novamente')
    }
        entradaInicial = redline.question('Deseja buscar outro livro? S/N ')
    } else {
    const livrosOrdenados =  livros.sort((a,b) => a.paginas - b.paginas)
    console.log('Esses são todos os livros dispníveis')
    console.table(livrosOrdenados)
    entradaInicial = redline.question('Deseja buscar outro livro? S/N ')
    }
}