//Build a constructor that adds, deletes, and gets all of our notes

const util = require("util");
const fs = require("fs");

const {v4:uuidv4} = require("uuid")

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


class Notes{
    read(){
        return readFileAsync("db/db.json","utf-8")
    }
    write(note){
        return writeFileAsync("db/db.json", JSON.stringify(note))
    }

    getnotes(){
        return this.read().then(notes => {
            let NotesArray;

            try {
                NotesArray = [].concat(JSON.parse(notes))
            } catch (error) {
                NotesArray = [];
            }
            return NotesArray
        })
    }
    addnote(note){
        const { title, text } = note;

        if(!title || !text) {
            throw new Error("Note cannot be added")
        }
        const newNote = {title,text,id: uuidv4()}

    }
}