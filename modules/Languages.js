const {Schema, model} = require('mongoose')

const Language = new Schema({
  _id: String,
  name: { 
    type: String, 
    default: '', 
    required: true 
  },
  code: { 
    type: String, 
    default: '', 
    required: true 
  },
});

module.exports = {
  Language: model("Language",Language)
}