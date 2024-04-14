// Nạp Express và khai báo router
const express = require("express");
const router = express.Router();

//import
const newsController = require("../app/controllers/NewsController");

//Cấu hình cho news:slug
router.use("/:slug", newsController.show);

//Cấu hình cho news (path + controller)
router.use("/", newsController.index);

//export
module.exports = router;
