const mongoose = require('mongoose')
const schema = mongoose.Schema

const employeeShchema = new schema({
    name : {
        type: String
    },
    designation :{
        type : String
    },
    Email :{
        type: String
    },
    age :{
        type: Number
    },
    avatar: {
        type : String
    }
},{timestamps: true})

const employee = mongoose.model('Employee',employeeShchema)
module.exports = employee