const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LinguagemSchema = new Schema({
    nome: {
        type: String,
        required : true
    }
})

module.exports = mongoose.model('Linguagem',LinguagemSchema)