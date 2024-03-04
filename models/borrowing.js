const mongoose = require("mongoose");

const borrowingSchema = new mongoose.Schema({
    borrowedBook:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "books",
    },
    borrowedBy:{
      type: mongoose.Schema.Types.ObjectId,
      ref:"users",
    },
    expectedReturnDate:{
      type:Date,
    },
    borrowDate:{
      type:Date,
    }
},
    { timestamps: true }

)
const BORROWING= mongoose.model("borrowing",borrowingSchema );

module.exports = BORROWING;