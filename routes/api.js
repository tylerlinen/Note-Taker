const router = require("express").Router();
const Notes = require("../db/notes");

//Create 3 routes Get, POST, Delete

router.get("/notes", (req, res) => {
   Notes.getnotes().then((notes) => res.json(notes)).catch((err) => res.status(500).json(err))
});

router.post("/notes", function (req, res) {
    Notes.addnote(req.body).then(note => res.json(note))
    .catch((err) => res.status(500).json(err))
})


router.delete("/notes/:id", function (req, res) {
    Notes.deletenote(req.params.id).then(()=> res.json({ok: true})).catch((err) => res.status(500).json(err))
});

module.exports = router;