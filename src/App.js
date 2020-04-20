import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import "./App.css";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Tech from "./components/Tech";
import Education from "./components/Education";
import Marketing from "./components/Marketing";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <div>
        <div id="main_nav">
          <Nav />
          <br />
        </div>

        <div>
          <Carousel />
        </div>
      </div>
      <div>
        <Tech />
      </div>

      <div>
        <About />
      </div>

      <div>
        <Education />
      </div>

      <div>{/* <Marketing /> */}</div>
      <div>
        <Skills />
      </div>
    </div>
  );
}

export default App;
