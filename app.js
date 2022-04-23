const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile("/gadgets.html", { root: __dirname });
});

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
