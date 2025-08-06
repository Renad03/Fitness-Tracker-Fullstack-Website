import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 0.3 },
  { name: "Group B", value: 0.1 },
  { name: "Group C", value: 0.4 },
  { name: "Group D", value: 0.2 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function DashboardPie() {
  return (
    <ResponsiveContainer
      width={200}
      height={200}
      style={{ margin: "auto", position: "relative" }}
    >
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          stroke="none"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div className="position-absolute text-center top-50 start-50 translate-middle">
        <p className="mb-1 text-light-grey">Stretching</p>
        <p className="mb-0 fs-4 fw-semibold">40hrs</p>
      </div>
    </ResponsiveContainer>
  );
}
