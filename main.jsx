import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div style={{ padding: 24, minHeight: "100vh", boxSizing: "border-box", background: "#F5F4F1" }}>
      <App />
    </div>
  </React.StrictMode>
);
