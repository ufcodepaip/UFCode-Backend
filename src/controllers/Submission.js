const SubmissionModel = require('../models/Submission')
const view = require('../views/Submission')

module.exports.createSubmission = (req, res) => {
    let Submission = req.body
    let promise = SubmissionModel.create(Submission)
        
    promise.then((Submission)=>{
        res.status(201).json(view.render(Submission))
    }).catch((error)=>{
        res.status(400).json({message: error})
    })
}

module.exports.listSubmission = (req, res) => {
    let promise = SubmissionModel.find().exec()

    promise.then((Submission)=>{
        res.status(200).json(view.renderMany(Submission))
    }).catch((error)=>{
        res.status(400).json({message: "error message", error: error})
    })
}

module.exports.findSubmission = (req, res) => {
    let id = req.params.id
    let promise = SubmissionModel.findById(id).exec()

    promise.then((Submission)=>{
        res.status(200).json(view.render(Submission))
    }).catch((error)=>{
            res.status(404).json({message: "Submission not found", error: error})
        }
    )
}

module.exports.deleteSubmission = (req, res) => {
    let id = req.params.id
    let promise = SubmissionModel.findByIdAndDelete(id).exec()

    promise.then((Submission)=>{
        res.status(200).json(view.render(Submission))
    }).catch((error)=>{
            res.status(400).json({message: "Submission not found", error: error})
        }
    )
}