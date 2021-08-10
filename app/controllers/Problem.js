const ProblemModel = require('../models/Problem')
const view = require('../views/Problem')
 
 module.exports.createProblem = (req, res) => {
    let problem = req.body
    let promise = ProblemModel.create(problem)
    
    promise.then((problem)=>{
        res.status(201).json(view.render(problem))
    }).catch((error)=>{
        res.status(400).json({message: error})
    })
    console.log(promise)
}


module.exports.listProblem = (req, res) => {
    let promise = ProblemModel.find().exec()
    promise.then((problem)=>{
        res.status(200).json(view.renderMany(problem))
    }).catch((error)=>{
        res.status(400).json({message: "error message", error: error})
    })
}

module.exports.findProblem = (req, res) => {
    let id = req.params.id
    let promise = ProblemModel.findById(id).exec()
    promise.then((problem)=>{
        res.status(200).json(view.render(problem))
    }).catch((error)=>{
            res.status(404).json({message: "problem not found", error: error})
        }
    )
}


module.exports.deleteProblem = (req, res) => {
    let id = req.params.id
    let promise = ProblemModel.findByIdAndDelete(id).exec()
    promise.then((problem)=>{
        res.status(200).json(view.render(problem))
    }).catch((error)=>{
            res.status(400).json({message: "problem not found", error: error})
        }
    )
}