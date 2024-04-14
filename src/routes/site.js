// Nạp Express và khai báo router
const express = require("express");
const router = express.Router();

//import
const siteController = require("../app/controllers/SiteController");

//Cấu hình cho news:slug
router.use("/search", siteController.search);

//Cấu hình cho news (path + controller)
router.use("/", siteController.home);

//export
module.exports = router;
