const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  imgUrl : {type : String, required: true },
  linkproject: {type: String, required: true}


});

module.exports = mongoose.model('Project', projectSchema);
