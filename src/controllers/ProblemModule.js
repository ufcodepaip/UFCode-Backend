const ProblemModuleModel = require('../models/ProblemModule')
const view = require('../views/ProblemModule')

module.exports.createProblemModule = (req, res) => {
    let problemModule = req.body
    let promise = ProblemModuleModel.create(problemModule)
        
    promise.then((problemModule)=>{
        res.status(201).json(view.render(problemModule))
    }).catch((error)=>{
        res.status(400).json({message: error})
    })
}

module.exports.listProblemModule = (req, res) => {
    let promise = ProblemModuleModel.find().exec()

    promise.then((problemModule)=>{
        res.status(200).json(view.renderMany(problemModule))
    }).catch((error)=>{
        res.status(400).json({message: "error message", error: error})
    })
}

module.exports.findProblemModule = (req, res) => {
    let id = req.params.id
    let promise = ProblemModuleModel.findById(id).exec()

    promise.then((problemModule)=>{
        res.status(200).json(view.render(problemModule))
    }).catch((error)=>{
            res.status(404).json({message: "problem-module not found", error: error})
        }
    )
}

module.exports.deleteProblemModule = (req, res) => {
    let id = req.params.id
    let promise = ProblemModuleModel.findByIdAndDelete(id).exec()

    promise.then((problemModule)=>{
        res.status(200).json(view.render(problemModule))
    }).catch((error)=>{
            res.status(400).json({message: "problem-module not found", error: error})
        }
    )
}