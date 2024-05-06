const express = require('express');
const { default: mongoose } = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv').config();

// ROUTE IMPORTS
const notesRoute = require('./routes/notes');

// MIDDLEWARES
app.use(bodyParser.json());
app.use(cors());
app.use('/notes', notesRoute);

// ROUTES
app.get('/', (req, res) => {
  res.send('We are at home');
});

// DB CONNECTION
mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => {
    console.log('Connected to DB');
    app.listen(process.env.PORT || 3000, () => {
      console.log('Server listening to Port 3000');
    });
  })
  .catch((err) => console.error(err));
