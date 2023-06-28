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

        if (id && Number(id)) {
            res.send(getLivroId(id))
        } else {
            res.status(422).send("Id invalido")
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req, res) {
    try {
        const livroNovo = req.body

        if (livroNovo.nome && livroNovo.id) {
            insereLivro(livroNovo)
            res.status(201).send("Livro inserido com sucesso")
        } else {
            res.status(422).send("Os campos nome e id sao obrigatorio!")
        }
        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchLivro(req, res) {
    try {
        const id = req.params.id
        const body = req.body

        if (id && Number(id)) {
            modificaLivro(body, id)
            res.status(200).send("Livro modificado com sucesso")
        } else {
            res.status(422).send("Id invalido")
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deletarLivro(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            deletaLivro(id)
            res.status(200).send("Livro deletado com sucesso")
        } else {
            res.status(422).send("Id invalido")
        }

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