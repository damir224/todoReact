const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    minlength: 3,
  },
});

module.exports = mongoose.model('User', UserSchema);
