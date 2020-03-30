import React from 'react';
import './App.css';
import {Route, Route, Switch, Link } from "react-router-dom"
import Home from "./Pages/Home.js"
import About from "./Pages/About"
import Map from "./Pages/Map"
function App() {
  return (
    <div className="App">
      <h1>Welcome to my website</h1>

      <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/About" component={About} />
     <Route exact path="/Map" component={Map} />
     </Switch>
    </div>
  );
}

export default App;
