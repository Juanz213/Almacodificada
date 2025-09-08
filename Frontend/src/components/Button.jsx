import React from "react";

export default function Button({ children, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-lg text-white transition ${
        disabled ? "bg-purpleLight/60 cursor-not-allowed" : "bg-purpleDark hover:bg-purple-600"
      }`}
    >
      {children}
    </button>
  );
}
