const express = require("express");
const {loginUser, createNewUser} = require("../controller/loginAndSignin")

const router = express.Router();

router.get("/login", (req, res)=>{
  return res.render("login");
})
.post("/login",loginUser);

router.get("/registration",(req , res)=>{
  return res.render("registration_page")
})
.post("/registration", createNewUser);


module.exports = router;
