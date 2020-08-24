const {Schema, model} = require('mongoose');

const schema = new Schema({
  name: String,
  text: String
});

module.exports = model('Message', schema);