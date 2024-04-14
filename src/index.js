const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
var path = require("path");
const app = express();
const port = 3000;

//Routes Import
// const route = require("./routes/index.js");
const route = require("./routes");

//Setup Static Files (IMG)
app.use(express.static(path.join(__dirname, "public")));

//HTTP Logger
// app.use(morgan("combined"));

//Template engine - Register `hbs.engine` with the Express app.
app.engine(
   "hbs",
   engine({
      extname: ".hbs",
   })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
// console.log(path.join(__dirname, 'resources/views'));

// Midleware xử lý dữ liệu từ form
app.use(
   express.urlencoded({
      extended: true,
   })
);
app.use(express.json());

//Router Init After Import
route(app);

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
});
