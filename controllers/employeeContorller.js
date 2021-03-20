const express = require('express')
const router = express.Router()
const { Employee } = require('../models/employee')

router.get('/', (req, res) => {
  Employee.find((err, docs) => {
    if (!err) { res.send(docs) } else { console.log('err reiterive data', +JSON.stringify(err, undefined, 2)) }
  })
})
router.post('/', (req, res) => {
  emp = new Employee({
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary
  })
  emp.save((err, docs) => {
    if (!err) { res.send(docs) } else { console.log('Err Inserted data:', +JSON.stringify(err, undefined, 2)) }
  })
})
