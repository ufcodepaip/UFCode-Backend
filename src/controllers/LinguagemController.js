const Linguagem = require("../models/LinguagemModel")
require("../../config/database")

const  novaLinguagem = async(req,res) =>{
    const novaling = new Linguagem(req.body)
    try{
        const lingsalva = await novaling.save()
        res.status(200).json(lingsalva)
    }catch(err) {
        res.status(500).json(err)
    }
}

const listarLinguagens = async(req, res) => {
    try{
        const linguagens  = await Linguagem.find()
        res.status(200).json(linguagens)
    }catch(err){
        res.status(500).json(err)
    }
}

const deletarLinguagem = async(req,res) => {
    try{
        const linguagem = await Linguagem.findById(req.params.id)
        await linguagem.delete()
        res.status(200).json("A linguagem foi deletada")
    }catch(err) {
        res.status(500).json(err)
    }
}

const linguagemController = {
    novaLinguagem,
    listarLinguagens,
    deletarLinguagem
}

module.exports = {linguagemController}