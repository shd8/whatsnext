const { model, Schema } = require('mongoose');

const userSchema = Schema({
  username: String,
  fullName: String,
  photo: String,
  info: String,
  email: String,
  conversations: [{ type: Schema.Types.ObjectId, ref: 'Conversation' }],
});

userSchema.methods.isValidPassword = function isValidPassword(password) {
  return password === this.password;
};

module.exports = model('User', userSchema);
