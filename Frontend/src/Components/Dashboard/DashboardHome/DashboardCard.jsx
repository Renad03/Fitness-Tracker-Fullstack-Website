import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function DashboardCard({ icon, title, children }) {
  return (
    <div className="bg-dark-red p-3 rounded-3 h-100 d-flex flex-column justify-content-between">
      <p className="m-0">
        <FontAwesomeIcon icon={icon} className="me-2" />
        <span className="fw-medium">{title}</span>
      </p>
      {children}
    </div>
  );
}
