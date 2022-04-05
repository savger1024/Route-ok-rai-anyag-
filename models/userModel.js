const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    nev: {
      type: String,
      required: [true, "Kötelező a név!"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Kötelező az e-mail!"],
      unique: true,
    },
  },
  { timestamps: true }
); //egy modell, amivel az információt töltjük fel

const User = mongoose.model("users", userSchema);

module.exports = User;
