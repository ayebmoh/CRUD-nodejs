const express = require('express')
const router = express.Router()


const Employeecontroller = require('../controllers/Employeecontroller')
const upload = require('../middleware/upload')

router.get('/', Employeecontroller.index)
router.post('/show', Employeecontroller.show)
router.post('/store', upload.single('avatar'), Employeecontroller.store)
router.post('/Update', Employeecontroller.Update)
router.post('/Destroy', Employeecontroller.Destroy)

module.exports = router