const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
// const usersRoute = require('./api/routes/users');
const adminRoute = require('./server/Routes/admin');
const homeRoute = require('./server/Routes/home');
const userRoute = require('./server/Routes/users');
const filesRoute = require('./server/Routes/file');
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

app.use('/uploads', express.static('/uploads'));

app.use('/uploads*', (req, res, next) => {
    try {
      res.sendFile(__dirname + '/uploads' + req.params[0]);
      
  
    } catch (error) {
      next();
    }
  });

app.use('/home',homeRoute);

app.use('/admin',adminRoute);

app.use('/users',userRoute);

app.use('/files',filesRoute);


app.listen(PORT, () => {
    console.log(`Server listen from ${PORT}.....`);
});