const express = require("express");
require("dotenv").config();
require("./config/db");
const { errors } = require("celebrate");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.urlencoded());
app.use(bodyParser.json());

app.use("/", require("./router"));

app.use(errors());

app.listen(PORT, () => {
  console.log(`Server is runnig on the port: ${PORT}`);
});
