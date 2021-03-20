const mongoose = require('mongoose')

const Employee = new mongoose.model('Employee', {
  name: { type: String },
  position: { type: String },
  office: { type: String },
  salary: { type: String }
})
module.exports = { Employee }
