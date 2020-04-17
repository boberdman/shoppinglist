const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

//use Routes - direct any request from api/items to use the actual path of /routes/api/items...
app.use('/api/items',items);

//Server listening port
const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Server started on port ${port}`));
    