class SiteController {
   // [GET] /
   home(req, res) {
      res.render("home");
   }

   // [GET] /search
   search(req, res) {
      res.render("search");
   }
}

//Export
module.exports = new SiteController();
