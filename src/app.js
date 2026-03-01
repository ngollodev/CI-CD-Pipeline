const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("DevOps Deployment Successful!");
});

app.listen(port, () => {
  console.log(`The app listening at http://localhost:${port}`);
});