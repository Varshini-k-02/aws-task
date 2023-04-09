const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const userroute = require("./router/routes");
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
// app.engine("ejs",ejs)
app.set("view engine", "ejs");

app.use("/", userroute);

// app.get("/", (req, res) => {
//   res.render("index");
// });
app.listen(3000, () => {
  console.log("SERVER SUCCESS");
});
