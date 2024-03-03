const mongoose = require("mongoose");

const querySchema = mongoose.Schema(
    {
        email:{
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
        status:{
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
const QUERY= mongoose.model("helpAndSupport", querySchema);

module.exports = QUERY; 