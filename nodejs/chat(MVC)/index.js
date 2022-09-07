const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 8000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

const Router  = require('./routes');  
app.use('/', Router);

app.listen(port, () => {
    console.log('Server Port : ', port);
});