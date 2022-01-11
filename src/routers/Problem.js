let controller = require("../controllers/Problem.js")

module.exports = (app) => {

    app.get("/api/problem", controller.listProblem)
    app.get("/api/problem/:id", controller.findProblem)
    app.post("/api/problem", controller.createProblem)
    app.delete("/api/problem/:id", controller.deleteProblem)
    app.get("/api/problem/:courseId/:moduleId", controller.findProblemByCourseAndModule)
}