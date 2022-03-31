const express = require('express');
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose');
const app = express();

//DB CONFIG
const db = require('./config/keys').MONGOURI;

//CONNECT TO MONGO
mongoose.connect(db, {useNewUrlParser: true})
.then(() => {console.log('MONGODB is CONNECTED')})
.catch((err) => {console.log(err)})

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//! Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));


const PORT = process.env.PORT || 2222;

app.listen(PORT, console.log(`server started on port ${PORT}`));