import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes
import Navbar from "./components/Navbar";

// Páginas
import HomePage from "./pages/HomePage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import AvatarPage from "./pages/AvatarPage.jsx";

export default function App() {
  return (
    <Router>
      <div>
        {/* Navbar fijo */}
        <Navbar />

        {/* Contenido de cada página */}
        <main className="container mx-auto px-4" style={{ paddingTop: "80px" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/avatars" element={<AvatarPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
