const express = require('express');

const app = express();
const port = process.env.PORT || 1337;

app.get('/', (req, res) => {
    res.json('hello world!');
})
app.listen(port, function () {
	console.log('Server running on port', port);
})