const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema(
  {
    bookId: {
      type: String,
      required: true,
      unique: true,
    },
    bookName: {
      type: String,
      required: true,
      unique:true
    },
    allocationHistory:[{UserId: {type: String}}]
  },
  { timestamps: true }
);

const userSchema = new mongoose.Schema(
    {
        userId: {
            type : String,
            required: true,
            unique: true,
        },
        name: {
            type : String,
            required: true,
        },
        username:{
            type: String,
            required: true,
            unique: true,
        },
        loginPassword:{
            type: String,
            required : true,
        }
    }
)
const USER = mongoose.model("user", userSchema);
const BOOK = mongoose.model("book", booksSchema);

module.exports = {
    USER,
    BOOK,

};

