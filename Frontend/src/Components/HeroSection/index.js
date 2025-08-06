import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'; // استيراد ملف الأنماط
import App from './App'; // استيراد مكون App

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);