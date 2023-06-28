const fs = require("fs")
const livroService = require("../services/livroService.js")

function getLivros(req, res) {
    try {
        res.send(livroService.getTodosLivros())
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros
}