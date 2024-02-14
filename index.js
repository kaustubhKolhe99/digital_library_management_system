const connectToMongoDB = require("./connect")
const userRouter = require()
const express = require("express")
const mongoose = require("mongoose")
mongoose.set('strictQuery', false);

const app = express();
const PORT = 8000;

connectToMongoDB('mongodb://127.0.0.1:27017/dlms').then(()=>{
    console.log("mongoDb connected")
})

//middlewares
app.use(express.urlencoded({extended: false}));

//Routers
app.use("/", userRouter);

//listening
app.listen(PORT , ()=> console.log(`Server Started at port: ${PORT}`));