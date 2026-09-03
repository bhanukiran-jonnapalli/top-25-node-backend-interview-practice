const express = require("express");
require("dotenv").config();
// const app = express();

const app = require("./app");
const PORT = process.env.PORT || 3000;

app.get("/health", (req, res) => {
  res.json({ message: "Server is running succefully" });
  // here we can also use res.send('some message') or res.status(200).json('some message') also return {message}
  // what should use when ?
});
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
