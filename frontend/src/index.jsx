import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/index.css";  // corrige "inde.css" -> "index.css"
import Router from "./Router";     // correspond au fichier Router.jsx
import { AuthProvider } from "./components/Authentification";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
    <Router />
    </AuthProvider>
  
  </React.StrictMode>
);
