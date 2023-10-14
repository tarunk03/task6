import React from 'react';
import './App.css';
import Head from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Head />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;

