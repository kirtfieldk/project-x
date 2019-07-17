import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "./Actions";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Article from "./Components/Article";
import About from "./Components/About";
import Post from "./Components/Post";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Login from "./Components/Login/loginIn";
// Admin Screen
import AdminScreen from "./Components/Login/AdminScreen";
import AdminNewsletter from "./Components/Login/AdminPages/AdminNewsletter";
import AdminImages from "./Components/Login/AdminPages/AdminImages";
import AdminOutsource from "./Components/Login/AdminPages/AdminOutsource";
import AdminPodcast from "./Components/Login/AdminPages/AdminPodcast";
import AdminBlogpost from "./Components/Login/AdminPages/AdminBlogpost";

const App = props => {
  useEffect(() => {
    props.fetchBlogpost();
    props.fetchOutsource();
    props.fetchPodcast();
    props.getNewsletter();
  }, []);
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
        <>
        <div className="row">
          <AdminScreen />
          <Route path="/admin/blogpost" component={AdminBlogpost} />
          <Route path="/admin/podcast" component={AdminPodcast} />
          <Route path="/admin/newsletter" component={AdminNewsletter} />
          <Route path="/admin/images" component={AdminImages} />
          <Route path="/Admin/outsource" component={AdminOutsource} />
        </div>
        </>
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
};
const mapStateToProps = ({
  podcastList,
  blogpostList,
  imageList,
  listLinkRead
}) => {
  return {
    podcastList,
    blogpostList,
    imageList,
    listLinkRead
  };
};
export default connect(
  mapStateToProps,
  actions
)(App);
