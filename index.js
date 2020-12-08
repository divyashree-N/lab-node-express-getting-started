//node server
var http = require('http')
http.createServer((req, res) => {
    res.write("welcome to Node server")
    res.end();
}).listen(3000, () => console.log("Node server working"))


//express server
var express = require('express')
var app = express();
app.get('/', (req, res) => {
    res.send("Welcome to Express server")
})
app.get('/sample', (req, res) => {
    res.send("Welcome to backend")
})
app.listen(4000, () => console.log("express server working"))