const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/"
)
.then(() => {
  console.log("Database Connected Successfully");
})
.catch((err) => {
  console.log("Database Connection Error:", err);
});

module.exports = mongoose;