const express = require('express');
const app = express();
const port = 8000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req,res) => {
    // render 사용할 때는 확장자 안적어도 된다
    res.render("larva");
})

app.listen(port, () => {
    console.log( 'Server port : ', port );
})