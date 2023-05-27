//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const list =[];

const homeStartingContent = "Hello, welcome to the daily journal. This is part of a challenge in my web design bootcamp. The challenge was named the EJS challenge, and it introduced me to back-end development. This was one heck of a challenge, and I did need help completing it. I learned a lot from my mistakes and blunderings."
const aboutContent ="hello, welcome to the daily journal. This is part of a challenge in my web design bootcamp. The challenge was named the EJS challenge, and it introduced me to back-end development. This was one heck of a challenge, and I did need help completing it. I learned a lot from my mistakes and blunderings."
const contactContent = "hello, welcome to the daily journal. This is part of a challenge in my web design bootcamp. The challenge was named the EJS challenge, and it introduced me to back-end development. This was one heck of a challenge, and I did need help completing it. I learned a lot from my mistakes and blunderings."

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req,res){
  res.render("home", {home: homeStartingContent, ourwords: list});
  });

app.get("/contact", function(req,res){
  res.render("contact", {contact: contactContent})
})

app.get("/about", function(req,res){
  res.render("about", {about: aboutContent})
})

app.get("/compose", function(req,res){
  res.render("compose");
})

app.post("/compose", function(req, res){
  const obj = {
     title: req.body.great,
     body: req.body.text
  }
  list.push(obj);
  res.redirect("/");
})

app.get("/post/:postName", function(req,res){
  const a = _.lowerCase(params.postName);
  list.forEach(function(man){
    const storedTitle = _.lowerCase(man.title);
    if(a == storedTitle){
      console.log("match found");
    } else{
      console.log("no match found");
    }
  });

  

})













app.listen(3000, function() {
  console.log("Server started on port 3000");
});
