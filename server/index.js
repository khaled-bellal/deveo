const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./src/routes')
const dbConnect = require('./src/database/connect')

const port = process.env.PORT || 5000

require('dotenv').config()

dbConnect()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

routes(app)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})