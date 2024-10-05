const express = require("express");
const port = 4000;

const app = express();

app.get("/", (req, res) => {
  res.send("The server is running perfectly");
});

app.listen(port, () => {
  try {
    console.log(`The server is running on port ${port}`);
  } catch (error) {
    console.log("There is an error in running the app");
  }
});