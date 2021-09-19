let controller = require("../controllers/Module.js")

module.exports = (app) => {

    app.get("/api/module", controller.listModule)
    app.get("/api/module/:id", controller.findModule)
    app.post("/api/module", controller.createModule)
    app.delete("/api/module/:id", controller.deleteModule)

}