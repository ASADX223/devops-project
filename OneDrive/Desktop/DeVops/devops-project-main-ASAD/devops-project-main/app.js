const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("The DevOps Project is Running 🚀");
});



app.listen(3000);

