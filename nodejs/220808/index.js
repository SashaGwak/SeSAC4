const express = require('express');
const app = express();
const port = 8080;

// serve static files
app.use(express.static('public'));
app.set('view engine', 'ejs');

const bodyParser = require('body-parser');
app.use( express.urlencoded({extended: true}));
app.use( bodyParser.json());

const router  = require('./routes');
app.use('/user', router);

app.listen(port, () => {
    console.log('Server Port : ', port);
})