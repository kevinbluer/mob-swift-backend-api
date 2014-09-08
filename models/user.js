var ObjectId, Schema, checkinSchema, mongoose;

mongoose = require('mongoose');

Schema = mongoose.Schema;

ObjectId = Schema.ObjectId;

checkinSchema = new Schema({
  firstname: String,
  lastname: String,
  username: String,
  email: String,
  password: String,
  date: { type: Date, default: Date.now }
},
{collection: "user"});

module.exports = mongoose.model('User', checkinSchema);