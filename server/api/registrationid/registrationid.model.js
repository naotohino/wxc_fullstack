'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RegistrationidSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Registrationid', RegistrationidSchema);