const express = require("express")
const app = express()
var cors = require("cors")
const linguagem = require("./src/routers/LinguagemRouter")

require("dotenv").config()
require("./config/database")

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.use("/linguagem",linguagem)
app.use("/novaLinguagem,",linguagem)

app.listen(process.env.PORT, ()=> {
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
})