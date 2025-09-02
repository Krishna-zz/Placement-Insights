const mongoose = require('mongoose')


const Super30_Schema = new mongoose.Schema({
    
  StudentName: { type: String, required: true },
  StudentBranch: { type: String, required: true },
  StudentCompany: { type: String, required: true },
  StudentCTC: { type: String, required: true },
  LinkedIn: { type: String },
  Github: { type: String },
  Portfolio: { type: String },
  Instagram: { type: String },
})


const Super30 = mongoose.model('Super30', Super30_Schema)


module.exports = Super30