// backend/models/Vacancy.js
const mongoose = require('mongoose');

const vacancySchema = new mongoose.Schema({
  branchName: { type: String, required: true },
  open: { type: Number, required: true },
  openPwd: { type: Number, required: true },
  ews: { type: Number, required: true },
  ewsPwd: { type: Number, required: true },
  sc: { type: Number, required: true },
  scPwd: { type: Number, required: true },
  st: { type: Number, required: true },
  stPwd: { type: Number, required: true },
  obcNcl: { type: Number, required: true },
  obcNclPwd: { type: Number, required: true }
});

module.exports = mongoose.model('Vacancy', vacancySchema);
