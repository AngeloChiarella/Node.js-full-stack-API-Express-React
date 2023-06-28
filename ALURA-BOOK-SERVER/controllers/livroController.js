const fs = require("fs")
const { getTodosLivros, getLivroId, insereLivro, modificaLivro, deletaLivro } = require("../services/livroService")

function getLivros(req, res) {
    try {
        res.send(getTodosLivros())
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getLivro(req, res) {
    try {
        const id = req.params.id

        res.send(getLivroId(id))
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req, res) {
    try {
        const livroNovo = req.body

        insereLivro(livroNovo)
        res.status(201).send("Livro inserido com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchLivro(req, res) {
    try {
        const id = req.params.id
        const body = req.body

        modificaLivro(body, id)
        res.status(200).send("Livro modificado com sucesso")

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deletarLivro( req, res ) {
    try {
        const id = req.params.id
        
        deletaLivro(id)
        res.status(200).send("Livro deletado com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)    
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deletarLivro
}