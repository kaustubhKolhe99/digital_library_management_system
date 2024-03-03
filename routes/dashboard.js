const express = require("express");
const { loginUser, handleCreateNewUser, handleUnknowReq } = require("../controller/loginAndSignin")
const { } = require("../controller/loginAndSignin");
const { checkAuth } = require("../middleware/auth");
const { renderFile } = require("ejs");
const User = require("../models/user");
const { handleChangePassword } = require("../controller/dashboard");

const router = express.Router();

router.get("/", checkAuth,(req, res) => {
    return res.render("dashboard.ejs")
})
router.get("/search", checkAuth,(req, res) => {

    return res.render("search.ejs");
})
    .post("/search",checkAuth, (req, res) => {

    });
router.get("/ebook",checkAuth, (req, res) => {
    return res.render("ebook.ejs");
})

router.get("/help",checkAuth, (req, res) => {
    return res.render("help.ejs");
})
    .post("/help",checkAuth, (req, res) => {
        
    });
router.get("/profile", checkAuth,(req, res) => {
    return res.render("aboutuser2.ejs");
});
router.get("/borrowed", checkAuth,(req, res) => {
    return res.render("borrowed.ejs");
});

router.get("/changepassword", checkAuth,(req, res) => {
    return res.render("changepassword.ejs");
})
    .post("/changepassword", checkAuth , handleChangePassword);
router.get("/:anything", handleUnknowReq)
module.exports = router;