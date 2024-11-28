import * as React from "react";
import { createRoot } from "react-dom/client";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";

const root = createRoot(document.body);
root.render(
  <div>
    <Home />
    <Footer />
  </div>
);
