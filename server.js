const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


app.listen(8000, ()=> {
    console.log('app listening at port 8000');
});

app.get('/one', (req, res) => {
    res.sendFile(__dirname + '/public/sol1.html')
})

app.get('/two', (req, res) => {
    res.sendFile(__dirname+ '/public/sol2.html')
})

app.get('/three', (req, res) => {
    res.sendFile(__dirname + '/public/sol3.html')
})