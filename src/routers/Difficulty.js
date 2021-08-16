let controller = require("../controllers/Difficulty.js")

module.exports = (app) => {

    app.get("/api/difficulty", controller.listDifficulty)
    app.get("/api/difficulty/:id", controller.findDifficulty)
    app.post("/api/difficulty", controller.createDifficulty)
    app.delete("/api/difficulty/:id", controller.deleteDifficulty)
}