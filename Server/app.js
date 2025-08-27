const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const placementData = require('../Server/routes/placement.routes')
const StudentModel = require('../Server/models/Student.model')
const connect_to_DB = require('../Server/config/db')


dotenv.config()
connect_to_DB()


const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))




app.use('/user', placementData)







app.listen(3000)