const mongoose = require("mongoose");

const querySchema = mongoose.Schema(
    {
        emailId:{
            type: String,
            required: true,
        },
        name : {
            type: String,
            required: true,
        },
        message:{
            type:String,
            required: true,
        },
        isAcknoledged:{
            type: Boolean,
            required: true,
        },
        raisedBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref: "users",
        }
    },
    {timestamp: true}
);
const QUERY= mongoose.model("query", querySchema);

module.exports = QUERY; 