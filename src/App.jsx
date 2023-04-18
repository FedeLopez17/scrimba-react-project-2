import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";

export default function App() {
  return (
    <div id="app">
      <Navbar />
      <main>
        <Hero />
        <Cards />
      </main>
    </div>
  );
}
