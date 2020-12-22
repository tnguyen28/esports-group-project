const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema(
  {
    gameName: {
      type: String,
      required: [true, "The game must have a name!"],
    },
  },
  { timestamps: true }
);

module.exports.Game = mongoose.model("Game", GameSchema);
