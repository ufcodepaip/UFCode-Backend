let express = require('express')
const language = require("./../src/routers/LanguageRouter")
const submission = require("./../src/routers/SubmissionRouter")

let difficultyRouter = require("../app/routers/Difficulty")
let houseRouter = require("../app/routers/house")
let problemRouter = require("../app/routers/Problem")

let cors = require('cors')

require('dotenv').config()

module.exports = function() {
    
    let app = express()
    app.set("port", process.env.PORT)
    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
    app.use(express.static('./public'))
    
    difficultyRouter(app)
    houseRouter(app)
    problemRouter(app)

    app.use("/language",language)
    app.use("/submission",submission)

    return app
}