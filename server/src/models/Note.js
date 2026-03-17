import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
title: {
    type: String,
    requried: true,
},
content: {
    type: String,
    requried: true,
},

},
{timestamps:true}

);

const Note = mongoose.model("Note",noteSchema)

export default Note;
