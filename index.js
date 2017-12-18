const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 1337;


const sendQuote = require('./sendQuote');
const quotes = require('./quote_repo');

app.all('*', (req, res, next) => {
    res.set('Acess-Control-Allow-Origin', '*');
    next();
});


app.get('/quotes/:num?', (req, res) => {
    const quoteRequested = req.params.num;

    quoteRequested > quotes.length
    ? res.sendFile(path.join(__dirname + '/index.html')) 
    : res.send(sendQuote(quoteRequested || 1));
});

app.use(function (err, req, res, next) {
    console.error(err, err.stack);
    res.status(500).send(err);
});

app.listen(port, () => {
	console.log('Mixing it up on port', port);
})