let controller = require("../controllers/Quizz.js")

module.exports = (app) => {

    app.get("/api/Quizz", controller.listQuizz)
    app.get("/api/Quizz/:id", controller.findQuizz)
    app.post("/api/Quizz", controller.createQuizz)
    app.delete("/api/Quizz/:id", controller.deleteQuizz)

}