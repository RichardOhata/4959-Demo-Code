const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

let counter = 0;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }
  next();
});

app.get("/", (req, res) => {
  res.json({ counter: counter });
});

app.post("/increment", (req, res) => {
  counter++;
  res.json({ success: true, counter });
});

app.post("/decrement", (req, res) => {
  counter--;
  res.json({ success: true, counter });
});

app.listen(8000, () => {
  console.log(`Server is running on http://localhost:${8000}`);
});
