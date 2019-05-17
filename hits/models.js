const mongoose = require('mongoose');

const hitSchema = new mongoose.Schema({
    name: String,
    story_title: String,
    title: String,
    objectID: { type: Number, unique: true },
    author: String,
    created_at_i: Number,
    story_url: String,
    url: String,
    status: Boolean
  });

const hitsModel = mongoose.model('hits', hitSchema);

module.exports = hitsModel