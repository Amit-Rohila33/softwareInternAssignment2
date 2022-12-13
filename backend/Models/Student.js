const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let studentSchema = new Schema({
  name: {
    type: String
  },
  age: {
    type: Number
  },
  gender: {
    type: String
  },
  mobile: {
    type: Number
  }
}, {
    collection: 'students'
  })
module.exports = mongoose.model('Student', studentSchema)