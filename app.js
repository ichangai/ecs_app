const express = require("express");
const app = express();

const port = 7000;

app.get("/", (req, res) => {
  res.status(200).json({
    status: "Nice",
    success: true,
    message: "Gloriuous purpose",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "Healthy",
    success: true,

    message: "Up and Running",
  });
});

app.listen(`${port}`, () => {
  console.log(`Server running on port ${port}`);
});
