import React from "react";
import "./App.scss";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Services } from "./components/Services/Services";
import { Works } from "./components/Works/Works";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Works />
      <Footer />
    </div>
  );
}

export default App;
