const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World!!");
  console.log("Server is up and running");
});

app.get("/about/:id", (req, res) => {
  res.send("about page for the user id: " + req.params.id);
});

app.listen(3000);
