// backend/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNo: { type: String, required: true, unique: true },
  jeeRank: { type: Number, required: true },
  category: { type: String, required: true },
  cgpa: { type: Number, required: true },
  preference1: { type: String, required: true },
  preference2: { type: String, required: true },
  preference3: { type: String, required: true },
  allocatedBranch: { type: String, default: null }
});

module.exports = mongoose.model('User', userSchema);
