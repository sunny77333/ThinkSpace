
export function getAllNotes (req,res) {
    res.status(200).send("you just fetched notes");
}

export function CreateNote (req,res) {
    res.status(201).send({message: "you just created note"});
}

export function updateNote (req,res) {
    res.status(200).send({message:"you just updated note"});
}

export function deleteNote (req,res) {
    res.status(200).send({message:"you just deleted note"});
}

