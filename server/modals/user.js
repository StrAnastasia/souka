const {Schema, model} = require('mongoose')

const User = new Schema({
  nick: String,
  email: String,
  isAdmin: Boolean,
  posts: [{
    type: Schema.Types.ObjectId,
    ref: "Post"
  }],
  favAuthors: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
})

const user = model('User', bagColorSchema);

module.exports = user;
