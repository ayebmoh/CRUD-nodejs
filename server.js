const mongoose = require('mongoose')
const express = require('express')
const morgan = require('morgan')
const bodyPraser = require('body-parser')

const Employeeroute = require('./routes/employee')
mongoose.connect('mongodb://0.0.0.0:27017/testdb', {useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('Database Connection Established!')
})  

const app = express()

app.use(morgan('dev'))
app.use(bodyPraser.urlencoded({extended: true}))
app.use(bodyPraser.json())


const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
} )

app.use('/api/employee', Employeeroute)