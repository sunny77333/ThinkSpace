import express from "express";
import { CreateNote, deleteNote, getAllNotes, updateNote } from "../controllers/notesControllers.js";

const router = express.Router();

router.get("/", getAllNotes);

router.get("/", CreateNote);

router.get("/:id", updateNote);

router.get("/:id", deleteNote);


export default router; 



