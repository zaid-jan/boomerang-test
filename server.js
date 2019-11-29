const express =  require('express');
const bodyParser = require('body-parser');
const path = require('path')
const bSol1 = require('./questions/bSol1')
const bSol2 =  require('./questions/bSol2')
const bSol3 = require('./questions/bSol3')
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


app.listen(8000, ()=> {
    console.log('app listening at port 8000');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/sol1.html')
})

app.get('/one', (req, res) => {
    res.sendFile(__dirname + '/public/sol1.html')
})

app.get('/two', (req, res) => {
    res.sendFile(__dirname+ '/public/sol2.html')
})

app.get('/three', (req, res) => {
    res.sendFile(__dirname + '/public/sol3.html')
})

app.post('/sol1', (req, res) => {
    let input = req.body.strings
    res.send(bSol1.sol1(input))
})

app.post('/sol2', (req, res) => {
    let input = req.body.directions
    // console.log(req.body)
    res.send(bSol2.sol2(input))
})

app.post('/sol3', (req, res) => {
    let input = req.body.postorder
    res.send(bSol3.sol3(input))
})