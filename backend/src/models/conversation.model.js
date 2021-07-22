const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const conversationSchema = new Schema({
  log: [{
    transmitter: [{ type: Schema.types.ObjectId, ref: 'Users' }],
    message: String,
    date: Date,
  }],

});

module.exports = model('Conversation', conversationSchema);
