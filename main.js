const express = require("express")
const app = express()
var cors = require("cors")
const language = require("./src/routers/LanguageRouter")

require("dotenv").config()
require("./config/database")

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.use("/language",language)
app.use("/newlanguage,",language)

app.listen(process.env.PORT, ()=> {
    console.log(`Express Server executed in port:  ${process.env.PORT}`)
})