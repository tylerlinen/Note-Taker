const router = require("express").Router();
const notes = require("../db/notes");

//Create 3 routes Get, POST, Delete

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../db/notes"))
});

app.post("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../db/notes"))
})

app.delete("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../db/notes"))
})

module.exports = router;