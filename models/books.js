const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema(
  {
    isbn: {
      type: Number,
      required: true,
    },
    bookName: {
      type: String,
      required: true,
      unique: false
    },
    authorName: {
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