//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
// const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("index");
});

app.get("/gallery", function(req, res){
  res.render("gallery");
});

app.get("/getStarted", function(req, res){
  res.render("getStarted");
});
app.get("/about", function(req, res){
  res.render("about");
});
// app.get("/services", function(req, res){
//   res.render("services");
// });
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
