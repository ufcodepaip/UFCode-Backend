const express = require('express')
const cors = require('cors')

const SwaggerUI = require("swagger-ui-express")
const swaggerJson = require("../swagger.json")

const languageRouter = require("../src/routers/Language")
const submissionRouter = require("../src/routers/Submission")
const difficultyRouter = require("../src/routers/Difficulty")
const houseRouter = require("../src/routers/house")
const problemRouter = require("../src/routers/Problem")
const courseRouter = require("../src/routers/Course")
const moduleRouter = require("../src/routers/Module")
const poblemCourseRouter = require("../src/routers/ProblemCourse")
const poblemModuleRouter = require("../src/routers/ProblemModule")

require('dotenv').config()

module.exports = function () {

    let app = express()
    app.set("port", process.env.PORT)
    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
    app.use(express.static('./public'))
    app.use("/api-docs", SwaggerUI.serve, SwaggerUI.setup(swaggerJson))

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