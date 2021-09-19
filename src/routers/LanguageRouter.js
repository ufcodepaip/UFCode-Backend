const router = require("express").Router()
const {languageController}= require('../controllers/LanguageController')

//get All language
router.get("/",(req, res) => {
    languageController.getAllLanguages(req,res)
})

//new Language
router.post("/",(req, res) => {
    languageController.newLanguage(req,res)
})

//Delete language by ID
router.delete("/:id", async(req, res) => {
    languageController.deleteLanguage(req,res)
})

//Update Language By ID
router.put("/:id", async(req,res) => {
    languageController.updateLanguage(req,res)
})

module.exports = router