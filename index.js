const config = require('config');
const Joi = require('joi');
const genres = require('./routes/genres');
const users = require('./routes/users');
const auth = require('./routes/auth');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/users', users);
app.use('/api/auth', auth);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`env: ${app.get('env')}`);
console.log(`config name: ${config.get('name')}`);

if(!config.get('jwtPrivateKey')){
    console.error('FATAL ERROR: vidly_jwtPrivateKey not defined');
    process.exit(1);
}


mongoose.connect('mongodb://localhost/playground')
.then(()=> console.log('connected to mongo db'))
.catch(()=> console.log('could not connect to mongo db'))