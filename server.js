import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.get('/', (req, res, next) => {
	return res.send('works this is a clone');
});

app.use((err, req, res, next) => {
	return res.send(`Error: ${err}`);
});

app.listen(process.env.PORT, (err) => {
	if (err) return console.log(`Error hosting on port ${process.env.PORT}.  Error: ${err}`);
	return console.log(`Now hosting on port ${process.env.PORT}.`);
});