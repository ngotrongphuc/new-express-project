const express = require("express");
const app = express();
const fs = require("fs").promises;
const path = require("path");

const countriesData = require("../sources/countries.json");

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get("/countries", (req, res) => res.send(countriesData));

app.get("/lorem", async (req, res) => {
  try {
    const data = await fs.readFile("./sources/lorem.txt", "utf-8");
    res.send(data);
  } catch (error) {
    res.status(500).send("Error reading file");
    console.log(error);
  }
});

app.use("/images", express.static(path.join(__dirname, "../public/images")));

app.use("/videos", express.static(path.join(__dirname, "../public/videos")));

app.use("/audios", express.static(path.join(__dirname, "../public/audios")));

app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;
