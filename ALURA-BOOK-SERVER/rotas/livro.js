const { Router } = require("express")
const { getLivros } = require("../controllers/livroController.js")

const router = Router()

router.get('/', getLivros)

router.post('/', (req, res) => {
    res.send('Voce fez uma requisicao do tipo POST  ')
})

router.patch('/', (req, res) => {
    res.send('Voce fez uma requisicao do tipo PATCH')
})

router.delete('/', (req, res) => {
    res.send('Voce fez uma requisicao do tipo DELETE')
})
module.exports = router