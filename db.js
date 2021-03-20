const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/CrudDB', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (!err) { console.log('Mongodb connection successfull...') } else { console.log('Mongodb connection failed..', +JSON.stringify(err, undefined, 2)) }
})
module.exports = { mongoose }
