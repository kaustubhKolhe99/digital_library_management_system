const express = require('express');
const { checkAuth } = require('../middleware/auth');
const {
    handleAddNewBook,
    handleAddNewMember,
    handleGetSettings,
    handleGetAdminDashboard,
} = require("../controller/adminDashboard");

const router = express.Router();

router.get("/", checkAuth ,handleGetAdminDashboard)
router.get("/newmember",checkAuth, handleAddNewMember)
router.get("/newbook", checkAuth, handleAddNewBook)
router.get("/settings", checkAuth, handleGetSettings)


module.exports = router;