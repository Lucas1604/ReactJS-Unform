const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb://react-unform:react123@ds157136.mlab.com:57136/react-unform', {useNewUrlParser: true});

app.use(cors());
app.use(express.json());
app.use(require('./routes/routes'));

const port = 3001
app.listen(port, () =>{
    console.log('app rodando na porta: ' + port + ' :)');
})