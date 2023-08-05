const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String },
  publishedYear: { type: Number },
});

module.exports = mongoose.model('Book', bookSchema);

//from the example

// const mongoose = require('mongoose');
 
// const UserSchema = new mongoose.Schema({
//     name: {
//         type: String
//     },
//     age: {
//         type: Number
//     }
// });
 
// const User = mongoose.model('User', UserSchema);
 
// module.exports = User;
