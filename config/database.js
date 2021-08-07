const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(console.log("Connectado ao MongoDB"))
  .catch((err) => {
    console.log(err);
  });