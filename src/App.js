import React from "react";
import "./App.css";
import { Jumbotron, Display4, Lead } from "bootstrap-4-react";
import Services from "./Components/services";
import Navigation from "./Components/navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DesignAndDev from "./Components/DesignAndDev";
import Development from "./Components/Development";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />

        <Switch>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/development">
            <Development />
          </Route>
          <Route path="/design-and-dev">
            <DesignAndDev />
          </Route>
          <Route path="/">
            <Services />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
