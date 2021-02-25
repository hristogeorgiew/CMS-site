const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();


//Configure express
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})