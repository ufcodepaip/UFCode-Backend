let controller = require("../controllers/Submission.js")

module.exports = (app) => {

    app.get("/api/Submission", controller.getAllSubmissions)
    app.get("/api/Submission/:id", controller.updateSubmission)
    app.post("/api/Submission", controller.newSubmission)
    app.delete("/api/Submission/:id", controller.deleteSubmission)

}