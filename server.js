const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const rotas = require('./src/rotas');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(rotas);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
