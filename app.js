const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();


//Configure Mongoose to Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/cms_site', {useNewUrlParser: true}).then(response => {
    console.log('MongoDB Connected Succssesfully.');
}).catch(err => {
    console.log('Dtabase Connection failed');
})


//Configure express
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));


//routes
app.use('/', (req, res) => {
    res.send('Welcome');
})

app.listen(7000, () => {
    console.log('Server is running on port 7000');
});