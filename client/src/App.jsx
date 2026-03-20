import React from "react";
import { Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import Createpage from "./pages/Createpage";
import NoteDetailPage from "./pages/NoteDetailPage";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div data-theme="business">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<Createpage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
