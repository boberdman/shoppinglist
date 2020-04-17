const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
// literal values, no quotes. defines what the field types are.
const ItemSchema = new Schema({
   name: {
       type: String,
       required: true
   },
   date: {
       type: Date,
       default: Date.now
   }

});

module.exports = Item = mongoose.model('item', ItemSchema);