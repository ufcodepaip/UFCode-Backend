const ModuleModel = require('../models/Module')
const view = require('../views/Module')

module.exports.createModule = (req, res) => {
    let moduleBody = req.body
    let promise = ModuleModel.create(moduleBody)
        
    promise.then((moduleBody)=>{
        res.status(201).json(view.render(moduleBody))
    }).catch((error)=>{
        res.status(400).json({message: error})
    })
}

module.exports.listModule = (req, res) => {
    let promise = ModuleModel.find().exec()

    promise.then((moduleBody)=>{
        res.status(200).json(view.renderMany(moduleBody))
    }).catch((error)=>{
        res.status(400).json({message: "error message", error: error})
    })
}

module.exports.findModule = (req, res) => {
    let id = req.params.id
    let promise = ModuleModel.findById(id).exec()

    promise.then((moduleBody)=>{
        res.status(200).json(view.render(moduleBody))
    }).catch((error)=>{
            res.status(404).json({message: "module not found", error: error})
        }
    )
}

module.exports.deleteModule = (req, res) => {
    let id = req.params.id
    let promise = ModuleModel.findByIdAndDelete(id).exec()

    promise.then((moduleBody)=>{
        res.status(200).json(view.render(moduleBody))
    }).catch((error)=>{
            res.status(400).json({message: "module not found", error: error})
        }
    )
}