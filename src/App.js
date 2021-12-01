import React from "react";
import "./App.css";
import Section from "./components/Section";
import Footer from "./components/Footer";
import movies from "./assets/movies_vze0mn.json";

import logo from "./assets/logo.png";

const App = () => {
  return (
    <div className="container">
      <img className="logo" src={logo} alt="netflix-logo" />
      {movies.map((movie, index) => {
        return (
          <Section
            className="section"
            key={index}
            category={movie.category}
            images={movie.images}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default App;
