
const quotes = require('./quote_repo');

function sendQuote(num){
    const quotesSent = [];
    let quote;


    for (let i = 0; i < num; i++){

        quote = quotes[Math.floor(Math.random() * quotes.length)];
        quotesSent.push(quote);

    }

    return quotesSent;

}


module.exports = sendQuote;

