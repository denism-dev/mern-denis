// config/db.js
const mongoose = require('mongoose');

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost/productmanager', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
