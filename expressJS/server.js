const express = require('express');
const mongoose = require('mongoose');
const userroute = require('./router/userrouter')
const mahasiswaroute = require('./router/mahasiswarouter')

const app = express();
const port = 3001; // Change this to your desired port number
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use('/api', userroute)
app.use('/api', mahasiswaroute);

// Connect to MongoDB
mongoose.connect('mongodb+srv://aninda:aninda@cluster0.nka6ouy.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Define your routes or middleware here

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
