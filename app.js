const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const hbs = require('express-handlebars');
const {mongoDbUrl} = require('./config/configuration');

const app = express();


//Configure Mongoose to Connect to MongoDB
mongoose.connect(mongoDbUrl, {useNewUrlParser: true}).then(response => {
    console.log('MongoDB Connected Succssesfully.');
}).catch(err => {
    console.log('Dtabase Connection failed');
})


//Configure express
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

//Setup View Engine To Use Handlebars
app.engine('handlebars', hbs({defaultLayout: 'default'}));
app.set('view engine', 'handlebars');


//routes
app.use('/', (req, res) => {
    res.render('default/index');
})

app.listen(7000, () => {
    console.log('Server is running on port 7000');
});