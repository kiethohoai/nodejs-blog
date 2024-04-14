const newsRouter = require("./news");
const siteRouter = require("./site");

function route(app) {
   //    app.get("/news", (req, res) => {
   //       res.render("news");
   //    });

   // app.get("/", (req, res) => {
   //    res.render("home");
   // });

   // app.get("/search", (req, res) => {
   //    res.render("search");
   // });

   //news
   app.use("/news", newsRouter);
   app.use("/", siteRouter);

   //home

   //search
}

module.exports = route;
