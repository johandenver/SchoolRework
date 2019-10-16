// Dependencies
var express = require("express");
var mongojs = require("mongojs");
var logger = require("morgan");
var path = require("path");

var app = express();

// Set the app up with morgan.
// morgan is used to log our HTTP Requests. By setting morgan to 'dev'
// the :status token will be colored red for server error codes,
// yellow for client error codes, cyan for redirection codes,
// and uncolored for all other codes.
app.use(logger("dev"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Database configuration
var databaseUrl = "notetaker";
var collections = ["notes"];

// Hook mongojs config to db variable
var db = mongojs(databaseUrl, collections);

// Log any mongojs errors to console
db.on("error", function(error) {
  console.log("Database Error:", error);
});

// Routes
// ======

// Simple index route
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "./public/index.html"));
});

// TODO: You will make six more routes. Each will use mongojs methods
// to interact with your mongoDB database, as instructed below.
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

// 1. Save a note to the database's collection
// POST: /submit
// ===========================================
app.post("/submit", function(req, res) {
  console.log(req.body);
  var note = req.body
  db.notes.insert(note, function(erro, saved) {
    if (error) {
      console.log(error);
    }
    else {
      res.send(saved);
    }
  })
});

// 2. Retrieve all notes from the database's collection
// GET: /all
// ====================================================
app.get("/all", function(req, res) {

  db.notes.find({}, function(error, found) {
    if (error) {
      console.log(error);
    }
    else {
      res.json(found);
    }
  });
});
// 3. Retrieve one note in the database's collection by it's ObjectId
// TIP: when searching by an id, the id needs to be passed in
// as (mongojs.ObjectId(IdYouWantToFind))
// GET: /find/:id
// ==================================================================
app.get("/find/:id", function(req, res) {

  db.notes.findOne(
    {
      _id: mongojs.ObjectId(req.params.id)
    },
    function(error, found) {
      if (error) {
        console.log(error);
        res.send(error);
      }
      else {
        console.log(found);
        res.send(found);
      }
    }
  );
});
// 4. Update one note in the database's collection by it's ObjectId
// (remember, mongojs.ObjectId(IdYouWantToFind)
// POST: /update/:id
// ================================================================
app.post("/update/:id", function(req, res) {

  db.notes.update(
    {
      _id: mongojs.ObjectId(req.params.id)
    },
    {
      $set: {
        title: req.body.title,
        note: req.body.note,
        modified: Date.now()
      }
    },
    function(error, edited) {
      if(error) {
        console.log(error);
        res.send(error);
      }
      else {
        console.log(edited);
        res.send(edited);
      }
    }
  );
});

// 5. Delete one note from the database's collection by it's ObjectId
// (remember, mongojs.ObjectId(IdYouWantToFind)
// GET: /delete/:id
// ==================================================================
app.get("/delete/:id", function(req, res) {

  db.notes.remove(
    {
      _id: mongojs.ObjectId(req.params.id)
    },
    function(error, removed) {
      if (error) {
        console.log(error);
        res.send(error);
      }
      else {
        console.log(removed);
        res.send(removed);
      }
    }
  );
});

// 6. Clear the entire note collection
// GET: /clearall
// ===================================
app.get("/clearall", function(req, res) {

  db.notes.remove({}, function(error, response) {
    if (error) {
      console.log(error);
      res.send(error);
    }
    else {
      console.log(response);
      res.send(response);
    }
  });
});

// Listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
