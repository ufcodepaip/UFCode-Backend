const Language = require("../models/Language")
const {getManyLang} = require("../views/Language")
require("../../config/database")

//Create a new language
const  newLanguage = async(req,res) =>{
    const newlang = new Language(req.body)
    try{
        const langsaved = await newlang.save()
        res.status(200).json(langsaved)
    }catch(err) {
        res.status(500).json(err)
    }
}

// Get all language
const getAllLanguages = async(req, res) => {
    try{
        let languages  = await Language.find()
        res.status(200).json(getManyLang(languages))
    }catch(err){
        res.status(500).json(err)
    }
}

//Delete language
const deleteLanguage = async(req,res) => {
    try{
        const language = await Language.findById(req.params.id)
        await language.delete()
        res.status(200).json("The language has been deleted")
    }catch(err) {
        res.status(500).json(err)
    }
}

//Update language
const updateLanguage = async(req,res) => {
    try{
        const updateLang = await Language.findByIdAndUpdate(
            req.params.id, {$set: req.body}, {new: true}
        )
        res.status(200).json(updateLang)
    }catch(err){
        res.status(500).json(err)
    }
}

const languageController = {
    newLanguage,
    getAllLanguages,
    deleteLanguage,
    updateLanguage
}

module.exports = {languageController}