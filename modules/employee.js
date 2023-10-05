const mongoose = require('mongoose')
const schema = mongoose.Schema

const employeeShchema = new schema({
    name : {
        type: String , required: true
    },
    designation :{
        type : String , required: true
    },
    Email :{
        type: String , required: true
    },
    age :{
        type: Number , required: true
    },
    avatar: {
        type : String
    }
},{timestamps: true})

const employee = mongoose.model('Employee',employeeShchema)
module.exports = employee