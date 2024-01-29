const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
  id: { type: String, required: true },
  author :{type: String, required: true },
  text: { type: String, required: true },
  imgUrl : {type : String, required: true },


});

module.exports = mongoose.model('Comment', projectSchema);
