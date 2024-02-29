const {connectToMongoDB} = require("./connect")
const loginpageRouter = require("./routes/loginAndRegistration")
const express = require("express")
const path = require("path")
const dashboardrouter = require("./routes/dashboard")
const app = express();
const PORT = 8000;

//ejs
app.set("view engine", "ejs");
app.set('views', path.resolve("./views") )

//middleware 
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//connection to MongoDb
connectToMongoDB("mongodb://127.0.0.1:27017/dlms").then(()=>{
    console.log("MongoDB connected.....")
})
//Routers
app.use("/dashboard", dashboardrouter);
app.use("/", loginpageRouter);



//listening
app.listen(PORT , ()=> console.log(`Server Started at port: ${PORT}`));