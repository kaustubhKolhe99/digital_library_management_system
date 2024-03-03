const express = require("express");
const { loginUser, handleCreateNewUser, handleUnknowReq } = require("../controller/loginAndSignin")
const { } = require("../controller/loginAndSignin")
const router = express.Router();

router.get("/", (req, res) => {
    return res.render("dashboard.ejs")
})
router.get("/search", (req, res) => {
    return res.render("search.ejs");
})
    .post("/", (req, res) => {

    });
router.get("/ebook", (req, res) => {
    return res.render("ebook.ejs");
})

router.get("/help", (req, res) => {
    return res.render("help.ejs");
})
    .post("/help", (req, res) => {

    });
router.get("/profile", (req, res) => {
    return res.render("aboutuser2.ejs");
});
router.get("/borrowed", (req, res) => {
    return res.render("borrowed.ejs");
});

router.get("/changepassword", (req, res) => {
    return res.render("changepassword.ejs");
})
    .post("/changepassword", (req, res) => {


    })
router.get("/:anything", handleUnknowReq)
module.exports = router;