import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const linkClass = (path) =>
    `px-3 py-2 text-sm font-medium transition ${
      location.pathname === path
        ? "text-purple-600 border-b-2 border-purple-600"
        : "text-gray-700 hover:text-purple-600"
    }`;

  return (
    <header className="bg-white border-b border-gray-200 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Izquierda: Logo + Links */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-purple-700">
            Alma Codificada
          </Link>

          {/* Links */}
          <nav className="flex gap-6">
            <Link to="/" className={linkClass("/")}>
              Inicio
            </Link>
            <Link to="/chat" className={linkClass("/chat")}>
              Chat
            </Link>
            <Link to="/avatars" className={linkClass("/avatars")}>
              Avatares
            </Link>
          </nav>
        </div>

        {/* Derecha: Botón Login */}
        <div>
          <Link
            to="/login"
            className="px-5 py-2 rounded-full bg-purple-600 text-white text-sm font-semibold hover:bg-purple-700 transition"
          >
            Iniciar sesión
          </Link>
        </div>
      </div>
    </header>
  );
}
