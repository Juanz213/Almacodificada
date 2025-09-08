// src/components/Header.jsx
import React from "react";

export default function Header() {
  return (
    <header className="bg-gradient-to-br from-gray-50 to-white py-16 px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-purple-800 leading-tight mb-6">
        Crea Videos IA Como un Profesional
      </h1>

      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
        Con nuestra plataforma, genera videos con avatares virtuales en minutos,
        sin cámaras y sin equipo costoso.
      </p>

      <button className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg transition-colors duration-300">
        Empieza Gratis
      </button>
    </header>
  );
}
