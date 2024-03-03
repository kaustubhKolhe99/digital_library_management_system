const express = require("express");
const { handleUnknowReq } = require("../controller/loginAndSignin")
const { checkAuth } = require("../middleware/auth");
//const { renderFile } = require("ejs");
const { handleChangePassword, handleProfiePage } = require("../controller/dashboard");

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
router.get("/profile", checkAuth, handleProfiePage);

router.get("/borrowed", checkAuth,(req, res) => {
    return res.render("borrowed.ejs");
});

router.get("/changepassword", checkAuth,(req, res) => {
    return res.render("changepassword.ejs");
})
    .post("/changepassword", checkAuth , handleChangePassword);
router.get("/:anything", handleUnknowReq)
module.exports = router;
router.get("/:anything", handleUnknowReq);