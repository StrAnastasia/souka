const {Schema, model} = require('mongoose')

const Post = new Schema({
  title: String,
  numLikes: Number,
  numDisLikes: Number,
  numViews: Number,
  creationTime: {
    type: Date,
    default: Date.now
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  comments: [{
    author:{
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    text: String,
    numLikes: Number,
  }],
})

const post = model('Post', bagColorSchema);

module.exports = post;
