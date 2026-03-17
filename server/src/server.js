import express from "express";
import noteRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001

app.use("/api/notes", noteRoutes);

connectDB();

app.listen(5001, () => {
    console.log("Server started on PORT:" , PORT);
});
