import React from "react";

export default function SliderButton({ onClick, icon }) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1 bg-transparent rounded-3 border border-white border-2"
    >
      {icon}
    </button>
  );
}
