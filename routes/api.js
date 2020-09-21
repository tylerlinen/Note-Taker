const router = require("express").Router();
const notes = require("../db/notes");

//Create 3 routes Get, POST, Delete

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../db/notes.js"))
});

app.post("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./db/db.json"))
})

app.delete("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../db/notes.js"))
})

module.exports = router;