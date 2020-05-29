import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import axios from'axios';
import Search from "./Search";
import NoResult from "./NoResult";



import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css"



function App() {
  return (
  
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route component={NoResult} /> 
      </Switch>
    </div>
  </Router>
);
}

export default App;