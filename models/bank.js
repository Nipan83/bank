var mongoose = require('mongoose');

var bankSchema = mongoose.Schema({
	ifsc: {
    type: String
  },
  bank_id:{
    type: Number
  },
  branch: {
    type: String
  },
  address: {
    type: String
  },
  city :{
    type: String
  },
  district: {
    type: String
  },
  state: {
    type: String
  },
  bank_name: {
    type: String
  }
});

var Bank = module.exports = mongoose.model('bank', bankSchema);