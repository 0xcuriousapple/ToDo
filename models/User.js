const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userHASH: {},
  listid: {},
  firstname: {},
  lastname: {},
});

const User = mongoose.model("User", userSchema);

module.exports = User;
