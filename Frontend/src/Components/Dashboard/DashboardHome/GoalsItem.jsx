import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

export default function GoalsItem({ value, img, title, desc }) {
  return (
    <div className="bg-grey p-2.5 rounded-4 d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center gap-2">
        <div
          style={{ width: "45px", height: "45px" }}
          className="bg-secondary-subtle rounded-circle fs-3 d-flex justify-content-center align-items-center"
        >
          {img}
        </div>
        <div>
          <p className="mb-0 fw-medium">{title}</p>
          <p style={{ fontSize: 14 }} className="mb-0 text-light-grey">
            {desc}
          </p>
        </div>
      </div>
      <div style={{ width: 50, height: 50 }}>
        <CircularProgressbar
          value={value}
          maxValue={1}
          text={`${value * 100}%`}
          strokeWidth={10}
          styles={buildStyles({
            pathColor: "#ffffff",
            textColor: "#ffffff",
            trailColor: "rgba(255, 255, 255, 0.2)",
          })}
        />
      </div>
    </div>
  );
}
