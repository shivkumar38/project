const mongoose = require('mongoose')

var employeeSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: 'This field is required.'
  },
  emailaddress: {
    type: String
  },
  subject: {
    type: String
  },
  message: {
    type: String
  }
})
// employeeSchema.path('email').validate(async (email) => {
//   const emailCount = await mongoose.models.Employee.countDocuments({email})
//   return !emailCount
//  }, 'Email allredy exits')

 // Custom validation for email
employeeSchema.path('email').validate((val) => {
 emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   return emailRegex.test(val)
 }, 'Invalid e-mail.')

mongoose.model('Employee', employeeSchema)
// module.exports = User
