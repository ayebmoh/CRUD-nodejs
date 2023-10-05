const { response } = require("express")
const employee = require("../modules/employee")
const fs = require('fs')


//Show list of employees
const index =(req,res,next) => {
    employee.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        message: 'an error Occured!'
    })
}

//Show an employee by his ID
const show = (req,res,next) =>{
    let employeeID = req.body.employeeID
    employee.findById(employeeID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
        message : 'an error Occured!'
    })
})
}

// ADD new employee
const store = (req, res, next) => {
    let newEmployee = new employee({
      name: req.body.name,
      designation: req.body.designation,
      Email: req.body.Email,
      age: req.body.age
    })
    if(req.file){
        newEmployee.avatar = req.file.path
    }
    else{
    newEmployee.save()
      .then(() => {
        res.json({
          message: 'Employee added successfully'
        });
      })
      .catch(error => {
        res.json({
          message: 'ERROR: Failed to add employee'
        });
      });
  };
}

//Update an Employee by his ID

const Update =(req,res,next) => {
    let employeeID = req.body.employeeID

    let Updatedata = {
        name:req.body.name,
        designation:req.body.designation,
        Email: req.body.Email,
        age: req.body.age
    }
    if(req.file){
        newEmployee.avatar = req.file.path
    }
else{
    employee.findByIdAndUpdate(employeeID,{$set: Updatedata})
    .then(()=>{
        res.json({
        message:'Employee updated successfully!'
    })
})
    .catch(error =>{
        res.json({
            message: 'ERROR: Failed To Update Employee'
        })
})
    }
}


//Delete an employee

const Destroy = (req,res,next) =>{
    let employeeID = req.body.employeeID 
    employee.findByIdAndRemove(employeeID)
    .then(()=>{
        res.json({
            message : 'Employee Deleted Successfuly!'
        })
    })
    .catch(error=>{
        res.json({
            message: 'ERROR: Failed To Delete Employee!'
        })    
    })
}


module.exports = {
    index, show, store, Update, Destroy
}

