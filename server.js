const express = require('express')
const app = express();
const cors = require('cors')
const morgan = require('morgan')
const nodemailer = require('nodemailer')
const PORT = 3000 

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.use('/', require('./routes/sendToMe'))