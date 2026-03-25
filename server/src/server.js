import express from "express";
import noteRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import ratelimiter from "./middleware/rateLimiter.js"
import cors from "cors";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001
const __dirname = path.resolve()

connectDB();

//middleware

if (process.env.NODE_ENV !== "production") {
    app.use(
      cors({
        origin: "http://localhost:5173",
      })
    );
  }
app.use(express.json()); //this middleware will parse JSON bodies e.g title,content: req.body

app.use(ratelimiter)


app.use((req,res,next)=> {
    console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
    next();
});

app.use("/api/notes", noteRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/dist")));
  
    app.get("*", (req, res) => {
      res.sendFile(
        path.join(__dirname, "../client", "dist", "index.html")
      );
    });
  }


app.listen(5001, () => {
    console.log("Server started on PORT:" , PORT);
});
