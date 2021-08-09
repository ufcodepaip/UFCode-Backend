const Language = require("../models/LanguageModel")
require("../../config/database")

const  newLanguage = async(req,res) =>{
    const newlang = new Language(req.body)
    try{
        const langsalved = await newlang.save()
        res.status(200).json(langsalved)
    }catch(err) {
        res.status(500).json(err)
    }
}

const getAllLanguages = async(req, res) => {
    try{
        const languages  = await Language.find()
        res.status(200).json(languages)
    }catch(err){
        res.status(500).json(err)
    }
}

const deleteLanguage = async(req,res) => {
    try{
        const language = await Language.findById(req.params.id)
        await language.delete()
        res.status(200).json("The language has been deleted")
    }catch(err) {
        res.status(500).json(err)
    }
}

const languageController = {
    newLanguage,
    getAllLanguages,
    deleteLanguage
}

module.exports = {languageController}