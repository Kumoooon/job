const client = require("./connection.js");
const express = require("express");
const app = express();
app.listen(3000, () => {
  console.log(`server is running on 3000`);
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

client.connect();

app.use(express.static(__dirname + "/"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
