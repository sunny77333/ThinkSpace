import Note from "../models/Note.js";

export async function getAllNotes(_,res){

     try {
    const notes = await Note.find().sort({createdAt:-1}) //showing newest added note
    res.status(200).json(notes)

} catch (error) {
    console.error("Error in getAllNotes")
    res.status(500).json({message: "Internal Server error"});
}

}

export async function getNoteById(req,res){

    try {
        const note = await Note.findById(req.params.id);
        if(!note) return res.status(404).json({message:"Note not found!"});
        res.json(note);
        
    } catch (error) {
        console.error("Error in finding note")
        res.status(500).json({message: "Internal Server error"});
    }

}


export async function CreateNote (req,res) {

    try {
        const {title,content} = req.body
        const note = new Note({title, content})

        const savednote = await note.save();
        res.status(201).json(savednote);
        
    } catch (error) {

        console.error("Error in createnote")
        res.status(500).json({message: "Internal Server error"});
        
    }
}

export async function updateNote (req,res) {
    try {
        const {title,content} = req.body
        const updatednote = await Note.findByIdAndUpdate(req.params.id,{title,content},{
            new:true
        });

       if(!updatednote) return res.status(404).json({message:"Note not found"})

       // const savednote = await note.save();
        res.status(201).json({message:"Note updated sucessfully"});
        
    } catch (error) {

        console.error("Error in update note")
        res.status(500).json({message: "Internal Server error"});
        
    }}

export async function deleteNote (req,res) {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if(!deletedNote) return res.status(404).json({message:"Note not found"});
        res.status(200).json({message:"Note deleted sucessfully"});

    
    } catch (error) {

        console.error("Error in delete note")
        res.status(500).json({message: "Internal Server error"});
        
    }

}

