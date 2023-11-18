const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const path = require('path')
const cors = require('cors')
const route = require('./routes')
app.use(cors())
app.use(express.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
route(app)
const port = process.env.PORT_WEB || 3001
const server = app.listen(port, () => {
    console.log(`Your running port ${port}`)
})
