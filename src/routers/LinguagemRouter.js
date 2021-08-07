const router = require("express").Router()
const {linguagemController}= require('../controllers/LinguagemController')

router.get("/",(req, res) => {
    linguagemController.listarLinguagens(req,res)
})

router.post("/",(req, res) => {
    linguagemController.novaLinguagem(req,res)
})

router.delete("/:id", async(req, res) => {
    linguagemController.deletarLinguagem(req,res)
})

module.exports = router