import React from "react";
import Home from "./components/Home";
import Nav from "./components/Nav";
import "./App.css";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Tech from "./components/Tech";

function App() {
  return (
    <div>
      <div>
        <div id="main_navigation">
          <Nav />
          <br />
        </div>

        <div>
          <Carousel />
        </div>
      </div>
      <Tech />

      <div class="container"></div>
      <About />
    </div>
  );
}

export default App;
