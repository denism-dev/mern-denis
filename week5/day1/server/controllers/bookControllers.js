const Book = require('../models/book');

// Create a new book
exports.createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: 'Error creating book' });
  }
};

// Get all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: 'Error getting books' });
  }
};

// Update a book by ID
exports.updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedBook);
  } catch (err) {
    res.status(500).json({ error: 'Error updating book' });
  }
};

// Delete a book by ID
exports.deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: 'Book deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting book' });
  }
};



//from the example

// const User = require('../models/user.model');

// // Function to find all users
// module.exports.findAllUsers = (req, res) => {
//     User.find() // Mongoose query to find all documents in the 'User' collection
//         .then((allDaUsers) => {
//             res.json({ users: allDaUsers }); // Respond with a JSON object containing the list of users
//         })
//         .catch((err) => {
//             res.json({ message: 'Something went wrong', error: err }); // Respond with an error message if there's an error
//         });
// }

// // Function to find a single user by ID
// module.exports.findOneSingleUser = (req, res) => {
//     User.findOne({ _id: req.params.id }) // Mongoose query to find a single document by its '_id' field
//         .then(oneSingleUser => {
//             res.json({ user: oneSingleUser }); // Respond with a JSON object containing the user found
//         })
//         .catch((err) => {
//             res.json({ message: 'Something went wrong', error: err }); // Respond with an error message if there's an error
//         });
// }

// // Function to create a new user
// module.exports.createNewUser = (req, res) => {
//     User.create(req.body) // Mongoose query to create a new document in the 'User' collection using the data in 'req.body'
//         .then(newlyCreatedUser => {
//             res.json({ user: newlyCreatedUser }); // Respond with a JSON object containing the newly created user
//         })
//         .catch((err) => {
//             res.json({ message: 'Something went wrong', error: err }); // Respond with an error message if there's an error
//         });
// }

// // Function to update an existing user by ID
// module.exports.updateExistingUser = (req, res) => {
//     User.findOneAndUpdate(
//         { _id: req.params.id }, // Mongoose query to find a single document by its '_id' field to be updated
//         req.body, // Data to update the user with, which is taken from 'req.body'
//         { new: true, runValidators: true } // Options: 'new' returns the updated document, and 'runValidators' runs Mongoose validation on the update
//     )
//         .then(updatedUser => {
//             res.json({ user: updatedUser }); // Respond with a JSON object containing the updated user
//         })
//         .catch((err) => {
//             res.json({ message: 'Something went wrong', error: err }); // Respond with an error message if there's an error
//         });
// }

// // Function to delete an existing user by ID
// module.exports.deleteAnExistingUser = (req, res) => {
//     User.deleteOne({ _id: req.params.id }) // Mongoose query to delete a single document by its '_id' field
//         .then(result => {
//             res.json({ result: result }); // Respond with a JSON object containing the result of the deletion operation
//         })
//         .catch((err) => {
//             res.json({ message: 'Something went wrong', error: err }); // Respond with an error message if there's an error
//         });
// }
