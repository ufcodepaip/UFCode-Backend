let controller = require("../controllers/ProblemCourse.js")

module.exports = (app) => {

    app.get("/api/problem-course", controller.listProblemCourse)
    app.get("/api/problem-course/:id", controller.findProblemCourse)
    app.post("/api/problem-course", controller.createProblemCourse)
    app.delete("/api/problem-course/:id", controller.deleteProblemCourse)

}