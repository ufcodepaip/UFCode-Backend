const Submission = require("../models/SubmissionModel")
const {getManySubmission} = require("../view/SubmissionView")
require("../../config/database")

//Create a new Submission
const newSubmission = async(req,res) => {
    const newSub = new Submission(req.body)
    try{
        const subsaved = await newSub.save()
        res.status(200).json(subsaved)
    }catch(err) {
        res.status(500).json(err)
    }
}

//Get all Submission
const getAllSubmissions = async(req,res) => {
    try{
        let subs = await Submission.find()
        res.status(200).json(getManySubmission(subs))
    }catch(err) {
        res.status(500).json(err)
    }
}


//Delete Submission
const deleteSubmission = async(req,res) => {
    try{
        const submission = await Submission.findById(req.params.id)
        await submission.delete()
        res.status(200).json("The submission has benn deleted")
    }catch(err) {
        res.status(500).json(err)
    }
}

//Update Submission
const updateSubmission = async(req,res) => {
    try{
        const updateSub = await Submission.findByIdAndUpdate(
            req.params.id, {$set: req.body}, {new: true}
        )
        res.status(200).json(updateSub)
    }catch(err){
        res.status(500).json(err)
    }
}

const submissionController = {
    newSubmission,
    getAllSubmissions,
    deleteSubmission,
    updateSubmission
}

module.exports = {submissionController}