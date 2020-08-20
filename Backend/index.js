const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
// const usersRoute = require('./api/routes/users');
// const adminRoute = require('./api/routes/admin');
const homeRoute = require('./server/Routes/home');
// var config = require('./api/config');
// const Url = config.mongoUrl

mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost:27017/share');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

const PORT = process.env.PORT || 3000;


// app.use('/api/admin', adminRoute);
app.use('/home', homeRoute);
// app.use('/api/user', usersRoute);



app.listen(PORT, () => {
    console.log(`Server listen from ${PORT}.....`);
});