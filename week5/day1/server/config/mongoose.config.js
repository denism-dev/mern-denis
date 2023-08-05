// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/my_books_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,

})
.then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));