const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

const app = express();
dotenv.config();

const port = process.env.PORT || 5000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.get('/', (req, res, next) => {
	return res.render('home');
});

app.use((err, req, res, next) => {
	return res.send(`Error: ${err}`);
});

app.listen(port, (err) => {
	if (err) return console.log(`Error hosting on port ${port}.  Error: ${err}`);
	return console.log(`Now hosting on http://localhost:${port}.`);
});