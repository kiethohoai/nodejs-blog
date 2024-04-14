class NewsController {
   // [GET] /news
   index(req, res) {
      res.render("news");
   }

   // [GET] /news/:slug
   show(req, res) {
      res.send("New Details...");
   }
}

//Export
module.exports = new NewsController();
