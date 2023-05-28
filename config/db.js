const mongoose = require("mongoose");

//CffU38YBY1hQpwrD
mongoose
  .connect(
    "mongodb+srv://e-commerce:CffU38YBY1hQpwrD@e-commerce.hut2kgn.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("db connected!");
  })
  .catch((e) => {
    console.log("db not connect: ", e);
  });
