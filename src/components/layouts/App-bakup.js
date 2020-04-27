import React, { Component } from "react";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home";
// import Nav from "./components/Nav";
import "./App.css";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Tech from "./components/Tech";
import Education from "./components/Education";
import Marketing from "./components/Marketing";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
// import Contact from "./components/Contact";

import MainNavigation from "./components/MainNavigation";

function App() {
  return (
    <div>
      <div>
        <div id="main_nav">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />

              <Route path="/skills" component={Skills} />
            </Switch>
          </BrowserRouter>

          <NavBar />
          {/* <Nav /> */}
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

      <div>
        <Skills />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
