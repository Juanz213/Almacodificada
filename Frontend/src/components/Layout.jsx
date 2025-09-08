import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-6">
        {children}
      </main>
      <footer className="text-center text-sm text-gray-500 py-6">
        © {new Date().getFullYear()} Alma Codificada — Acompañamiento emocional virtual
      </footer>
    </div>
  );
}
