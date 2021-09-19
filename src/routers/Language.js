
let controller = require("../controllers/Language.js")

module.exports = (app) => {

    app.get("/api/language", controller.getAllLanguages)
    app.get("/api/language/:id", controller.updateLanguage)
    app.post("/api/language", controller.newLanguage)
    app.delete("/api/language/:id", controller.deleteLanguage)

}