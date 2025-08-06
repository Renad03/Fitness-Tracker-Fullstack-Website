import React from "react";

export default function SliderIndicator({ active }) {
  return (
    <div
      style={{ width: active ? "28px" : "20px", height: "14px" , transition : 'all 0.3s' }}
      className={`${active ? "bg-red" : "bg-grey"} rounded-3`}
    ></div>
  );
}
