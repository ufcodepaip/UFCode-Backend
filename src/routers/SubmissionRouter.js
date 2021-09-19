const router = require("express").Router()
const {submissionController} = require("../controllers/SubmissionController")

//Get all Submission
router.get("/",(req,res) => {
    submissionController.getAllSubmissions(req,res)
})

//New Submission
router.post("/",(req,res) => {
    submissionController.newSubmission(req,res)
})

//Delete a Submission by ID
router.delete("/:id",async(req,res) => {
    submissionController.deleteSubmission(req,res)
})

//Update Submission by ID
router.put("/:id", async(req,res) => {
    submissionController.updateSubmission(req,res)
})

module.exports = router