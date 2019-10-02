const quotes = require("./quote_repo");

function sendQuote(num) {
  const quotesSent = [];
  let quote;
  let allQuotes = quotes;

  for (let i = 0; i < num; i++) {
    quote = allquotes.splice(Math.floor(Math.random() * quotes.length),1);
    quotesSent.push(quote);
  }

  return quotesSent;
}

module.exports = sendQuote;
