var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// create a new NoteSchema object
var NoteSchema = new Schema({

    // `title` is of type String
    title: String,
    // `body` is of type String
    body: String
});

// creates model from Schema
var Note = mongoose.model("Note", NoteSchema);

// export comment model
module.exports = Note;