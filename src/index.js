import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup";
import { UserProvider } from "./components/UserContext.js";

<script src="https://cdn.tailwindcss.com"></script>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}

      </Routes>
    </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);
