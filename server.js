const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.send("<h1>Hello W0rld</h1>");
  console.log("Hello W0rld");
});

app.listen(1234);
