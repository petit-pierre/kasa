import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Housing from "./pages/Housing";
import About from "./pages/About";
import Error404 from "./pages/404";
import Footer from "./components/Footer";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route
          path={`${process.env.PUBLIC_URL}/index.html`}
          element={<Home />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/Housing/:houseNumber`}
          element={<Housing />}
        />
        <Route path={`${process.env.PUBLIC_URL}/About`} element={<About />} />
        <Route path={`${process.env.PUBLIC_URL}/*`} element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
