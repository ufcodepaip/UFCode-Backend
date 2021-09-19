const ProblemCourseModel = require('../models/ProblemCourse')
const view = require('../views/ProblemCourse')

module.exports.createProblemCourse = (req, res) => {
    let problemCourse = req.body
    let promise = ProblemCourseModel.create(problemCourse)
        
    promise.then((problemCourse)=>{
        res.status(201).json(view.render(problemCourse))
    }).catch((error)=>{
        res.status(400).json({message: error})
    })
}

module.exports.listProblemCourse = (req, res) => {
    let promise = ProblemCourseModel.find().exec()

    promise.then((problemCourse)=>{
        res.status(200).json(view.renderMany(problemCourse))
    }).catch((error)=>{
        res.status(400).json({message: "error message", error: error})
    })
}

module.exports.findProblemCourse = (req, res) => {
    let id = req.params.id
    let promise = ProblemCourseModel.findById(id).exec()

    promise.then((problemCourse)=>{
        res.status(200).json(view.render(problemCourse))
    }).catch((error)=>{
            res.status(404).json({message: "problem-course not found", error: error})
        }
    )
}

module.exports.deleteProblemCourse = (req, res) => {
    let id = req.params.id
    let promise = ProblemCourseModel.findByIdAndDelete(id).exec()

    promise.then((problemCourse)=>{
        res.status(200).json(view.render(problemCourse))
    }).catch((error)=>{
            res.status(400).json({message: "problem-course not found", error: error})
        }
    )
}