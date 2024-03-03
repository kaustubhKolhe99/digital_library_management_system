const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema(
  {
    bookId: {
      type: String,
      required: true,
      unique: true,
    },
    isbn: {
      type: String,
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
      type: mongoose.Schema.booksSchema,
      ref: BOOKS,
    },
    allocationHistory: [{ UserId: { type: String } }]
  },
  { timestamps: true }
);
const BOOKS = mongoose.model("books", booksSchema);

module.exports = BOOKS;