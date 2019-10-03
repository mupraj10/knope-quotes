const quotes = require("./quote_repo");

function sendQuote(num, keyword) {
  const quotesSent = [];
  let quote;

  const searchRegex = new RegExp(`\\b${keyword}\\b`, 'gi')
  const searchedQuotes = quotes.filter(quote => quote.match(searchRegex));

  for (let i = 0; i < num; i++) {
    quote = searchedQuotes[Math.floor(Math.random() * searchedQuotes.length)];
    quotesSent.push(quote);
  }

  return quotesSent;
}

module.exports = sendQuote;
