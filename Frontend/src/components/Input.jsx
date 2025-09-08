import React from "react";

export default function Input({ value, onChange, placeholder, onKeyDown }) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
      className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purpleLight"
    />
  );
}
