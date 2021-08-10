let express = require('express')
const language = require("./../src/routers/LanguageRouter")
require('dotenv').config()

module.exports = function() {
    
    let app = express()
    app.set("port", process.env.PORT)
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
    app.use(express.static('./public'))

    app.use("/language",language)
    app.use("/newlanguage,",language)

    return app
}