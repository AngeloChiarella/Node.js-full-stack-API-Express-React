const fs = require("fs")

function getTodosLivros() {
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivroId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const livroFiltrado = livros.filter(livro => livro.id === id)[0]
    
    return livroFiltrado
}

function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const novaLista = [...livros, livroNovo]

    fs.writeFileSync("livros.json", JSON.stringify(novaLista))
}

function modificaLivro(alteracoes, id) {
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)
    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...alteracoes }
    livrosAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

function deletaLivro(id) {
    let livros = JSON.parse(fs.readFileSync("livros.json"))
    const livrosFiltrados = livros.filter(livro => livro.id !== id)

    fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados))
}

module.exports = {
    getTodosLivros,
    getLivroId,
    insereLivro,
    modificaLivro,
    deletaLivro
}