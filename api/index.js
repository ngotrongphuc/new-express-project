const express = require("express");
const app = express();
const path = require('path');

const countriesData = require('../source/countries.json');

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get("/countries", (req, res) => res.send(countriesData));

app.use('/images', express.static(path.join(__dirname, '../public')));

app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;
