const { connectToMongoDB } = require("./connect")
const loginpageRouter = require("./routes/loginAndRegistration")
const express = require("express")
const path = require("path")
const dashboardRouter = require("./routes/dashboard")
const cookieParser = require("cookie-parser");
const { restrictedToLoginUserOnly, checkAuth } = require("./middleware/auth")

//const vars
const app = express();
const PORT = 8000;

//ejs
app.set("view engine", "ejs");
app.set('views', path.resolve("./views"))

//middleware 
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//connection to MongoDb
connectToMongoDB("mongodb://127.0.0.1:27017/dlms").then(() => {
    console.log("MongoDB connected.....")
})

//Routers
app.use("/dashboard", restrictedToLoginUserOnly, dashboardRouter); //restrictedToLoginUserOnly is a inline middleware
app.use("/", loginpageRouter);



//listener
app.listen(PORT, () => console.log(`Server Started at port: ${PORT}`));