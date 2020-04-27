import React from "react";
import "./App.css";
import * as ReactBootStrap from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Tech from "./components/Tech";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Marketing from "./components/Marketing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="main_app">
      <Router>
        <div id="main_nav">
          <NavBar />
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/skills" component={Skills} />

          <Route path="/education" component={Education}>
            <Education />
          </Route>

          <Route path="/marketing" component={Marketing}>
            <Marketing />
          </Route>
          <Route path="/contact" component={Contact}>
            <Contact />
          </Route>
        </Switch>
      </Router>

      <div>
        <Tech />
        <About />
        <Education />
        <Skills />

        <Footer />
      </div>
    </div>
  );
}

export default App;
