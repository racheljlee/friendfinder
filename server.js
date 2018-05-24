// Dependencies;
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Set up Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Sets 'public' folder as root to allow css file to work
app.use(express.static(path.join(__dirname, "./app/public")));

// Set up Express app to handle data-parsing (makes it look neater)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// require htmlRoutes.js & apiRoutes.js files
var htmlRoutes = require("./app/routing/htmlRoutes")(app);
var apiRoutes = require("./app/routing/apiRoutes")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });