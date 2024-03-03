const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema(
  {
    isbn: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: false
    },
    author: {
      type: String,
      required: true,
      unique: false
    },
    currentHolder: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    //allocationHistory: [{ UserId: { type: String } }]
  },
  { timestamps: true }
);
const BOOKS = mongoose.model("books", booksSchema);

module.exports = BOOKS;