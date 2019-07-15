import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "./Actions";
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
import Footer from "./Components/Footer";
import Login from "./Components/Login/loginIn";

const App = props => {
  useEffect(() => {
    props.fetchBlogpost();
    props.fetchOutsource();
    props.fetchPodcast();
  }, [props]);
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/post" component={Post} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/article/:id" component={Article} />
        <Route path="/admin/login" component={Login} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default connect(
  null,
  actions
)(App);
