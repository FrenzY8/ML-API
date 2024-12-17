const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use("/api", routes);

app.get("/", (req, res) => {
  res.send({
    message: "Welcome to MLBB APi.",
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
