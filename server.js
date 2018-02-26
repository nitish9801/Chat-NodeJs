var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(express.static(__dirname))

app.use(bodyParser.json())

app.use(function (req, res, next) {
    
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:3000');
    
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
    
        // Pass to next layer of middleware
        next();
    });

var messages = [
    {name: 'Nitish', message: 'Hello'},
    {name: 'John', message: 'Hello'},
]

app.get('/messages', (req, res) => {
    res.send(messages)
})

app.post('/messages', (req, res) => {
    
    messages.push(req.body)
    res.sendStatus(200)
})



var server = app.listen(3000, () => {
    console.log('server is listening to', server.address().port)
})


