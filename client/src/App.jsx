import React from "react";
import { Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import Createpage from "./pages/Createpage";
import NoteDetailPage from "./pages/NoteDetailPage";
import { toast, Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <button onClick={() => toast.success("Congrats")}>click me</button>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<Createpage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
