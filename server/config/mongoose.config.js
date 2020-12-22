const mongoose = require("mongoose");

module.exports.connect = mongoose
  .connect("mongodb://localhost/esportDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("ESports DB Connection established"))
  .catch((err) => console.log("There was an error", err));
