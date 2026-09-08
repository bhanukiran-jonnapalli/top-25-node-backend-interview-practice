const express = require("express");
require("dotenv").config();
const cors = require("cors");
const routes = require("./routes/user.routes");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", routes);
app.get("/health", (req, res) => {
  return res.json({ message: "Application is working fine" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
