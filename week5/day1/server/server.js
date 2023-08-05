const express = require('express');c
const bookController = require('./controllers/bookControllers');

const app = express();
app.use(express.json());


// Routes
app.post('/books', bookController.createBook);
app.get('/books', bookController.getAllBooks);
app.put('/books/:id', bookController.updateBook);
app.delete('/books/:id', bookController.deleteBook);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

//from the example int the app

// Import the Express library
const express = require("express");
// Create an instance of the Express application
// const app = express();

// Import and execute the Mongoose configuration file, which connects the app to the MongoDB database
require("./config/mongoose.config");

// Middleware to parse incoming requests with JSON payloads and form data
app.use(express.json(), express.urlencoded({ extended: true }));

// Import the user-related routes from the user.routes.js file
const AllMyUserRoutes = require("./routes/user.routes");
// Set up the user routes by invoking the function in user.routes.js and passing the Express app as an argument
AllMyUserRoutes(app);

// Start the server and make it listen on port 8000
app.listen(8000, () => console.log("The server is all fired up on port 8000"));
