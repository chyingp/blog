const express = require('express');
const app = express();

app.use((req, res, next) => {
	res.sendStatus(500);
});

app.listen(3000);