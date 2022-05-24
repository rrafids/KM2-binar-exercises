import React from "react";
import { render } from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";

const root = document.getElementById("root");
render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  </Provider>,
  root
);
