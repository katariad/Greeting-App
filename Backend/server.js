import express from "express";
import cors from "cors";
import _ from "lodash";
const app = express();

const port =  || 8000;
app.use(cors());
app.get("/", (req, res) => {
  res.send("backend is running ");
});

app.get("/api/greet/", (req, res) => {
  let { name } = req.query;
  if (!name) {
    return res.status(400).json({ error: "Name is required." });
  }
  name = _.capitalize(name);
  res.json({ message: `Hello, ${name}! Welcome to Younglabs.` });
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

module.exports = app;