const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SubmissionSchema = new Schema({
    codigoInput:{
        type:String,
        required:true
    },
    resultado: {
        type : String,
        required:true
    },
    erro : {
        type : String,
        required: true
    },
    id_problema : {
        type: Schema.Types.ObjectId,
        required: true
    },
    id_linguagem : {
        type: Schema.Types.ObjectId,
        required: true
    }
})

module.exports = mongoose.model('Submissao',SubmissionSchema)