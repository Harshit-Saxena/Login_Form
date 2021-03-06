const express = require('express');
const expressLayouts = require('express-ejs-layouts')
const app = express();


//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//! Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/members', require('./routes/members'));


const PORT = process.env.PORT || 2222;

app.listen(PORT, console.log(`server started on port ${PORT}`));