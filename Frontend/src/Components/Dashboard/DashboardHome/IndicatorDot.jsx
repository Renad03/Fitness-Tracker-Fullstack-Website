import React from "react";

export default function IndicatorDot({ size, color, text, textStyle, gap }) {
  return (
    <div className={`d-flex align-items-center ${gap}`}>
      <div
        style={{
          width: size,
          height: size,
          backgroundColor: color,
        }}
        className="rounded-circle"
      ></div>
      <span className={textStyle}>{text}</span>
    </div>
  );
}
