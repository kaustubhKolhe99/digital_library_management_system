const {connectToMongoDB} = require("./connect")
const loginpageRouter = require("./routes/loginAndRegistration")
const express = require("express")
const path = require("path")
const mongoose = require("mongoose")
mongoose.set('strictQuery', true);

const app = express();
const PORT = 8000;

//middleware 
app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect("mongodb://127.0.0.1:27017/dlms").then(()=>{
    console.log("mongodb connected")
})

app.set("view engine", "ejs");
app.set('views', path.resolve("./views") )
//middlewares
app.use(express.urlencoded({extended: false}));

//Routers
app.use("/", loginpageRouter);

//listening
app.listen(PORT , ()=> console.log(`Server Started at port: ${PORT}`));