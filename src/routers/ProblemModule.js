let controller = require("../controllers/ProblemModule.js")

module.exports = (app) => {

    app.get("/api/problem-module", controller.listProblemModule)
    app.get("/api/problem-module/:id", controller.findProblemModule)
    app.post("/api/problem-module", controller.createProblemModule)
    app.delete("/api/problem-module/:id", controller.deleteProblemModule)

}