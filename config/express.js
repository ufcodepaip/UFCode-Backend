let express = require('express')

const languageRouter = require("../src/routers/Language")
const submissionRouter = require("../src/routers/Submission")

let difficultyRouter = require("../app/routers/Difficulty")
let houseRouter = require("../app/routers/house")
let problemRouter = require("../app/routers/Problem")

const courseRouter = require("../src/routers/Course")
const moduleRouter = require("../src/routers/Module")
const poblemCourseRouter = require("../src/routers/ProblemCourse")
const poblemModuleRouter = require("../src/routers/ProblemModule")

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

    languageRouter(app)
    submissionRouter(app)

    courseRouter(app)
    moduleRouter(app)
    poblemCourseRouter(app)
    poblemModuleRouter(app)
    
    return app
}