const mongoose = require('mongoose')


const studentSchema = new mongoose.Schema({

  name: String,
  branch: String,
  company: String,
  ctc: String,
  
  
})

const student = mongoose.model('student', studentSchema , 'placement_data')

module.exports = student