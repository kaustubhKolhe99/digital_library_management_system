const express = require("express");

const router = express.Router();

router.get("/login", (req, res)=>{
  return res.render("login");
});

router.get("/registration",(req , res)=>{
  return res.render("registration_page")
})
module.exports = router;
