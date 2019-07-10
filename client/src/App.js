import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { useEffect } from "react";
// import * as actions from "./actions";

import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Article from "./Components/Article";
import About from "./Components/About";
import Post from "./Components/Post";
import Nav from "./Components/Nav";

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/post" component={Post} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/article/:id" component={Article} />
      </Switch>
    </Router>
  );
};

export default App;
