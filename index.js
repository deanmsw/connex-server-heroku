import express from "express";

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/api", (req, res) => {
  res.json({ title: "Hello from Dean Scotthornes server!" });
});

import time from './src/controllers/timeController.js'
app.get('/time', time);


import serverMetrics from './src/middleware/serverMetrics.js'
app.use(serverMetrics)

app.get("/metrics", (req, res) => {
  res.json(serverMetrics);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});