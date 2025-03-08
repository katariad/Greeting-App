import express from "express";
import cors from "cors";
import _ from "lodash";
const app = express();

app.use(cors({ origin: ["process.env.CLIENT_URL", "http://localhost:5173/"] }));
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

if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
