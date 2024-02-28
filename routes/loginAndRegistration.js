const express = require("express");
const {loginUser, createNewUser} = require("../controller/loginAndSignin")

const router = express.Router();

router.get("/", (req, res)=>{
  return res.render("landingPage2.ejs")
});
router.get("/search", (req, res)=>{
  return res.render("search.ejs");
})
.post("/", (req, res)=>{
  
});
router.get("/help",(req,res)=>{
  return res.render("help.ejs");
})
.post("/help",(req, res)=>{

});
router.get("/profile", (req, res)=>{
  return res.render("aboutuser2.ejs");
});
router.get("/borrowed", (req ,res)=>{
  return res.render("borrowed.ejs");
});

router.get("/changepassword", (req, res)=>{
  return res.render("changepassword.ejs");
})
.post("/changepassword", (req, res)=>{

})
router.get("/login", (req, res)=>{
  return res.render("login");
})
.post("/login",loginUser);

router.get("/registration",(req , res)=>{
  return res.render("registration_page")
})
.post("/registration", createNewUser);


module.exports = router;
