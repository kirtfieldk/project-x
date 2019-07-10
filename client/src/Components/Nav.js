import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="col-12 bg-dark ">
      <div className="row">
        <div className="col-3 link">
          <Link to="/" className="white">
            Home
          </Link>
        </div>
        <div className="col-3  link">
          <Link to="/about" className="white">
            About
          </Link>
        </div>
        <div className="col-3 link">
          <Link to="/post" className="white">
            Post
          </Link>
        </div>
        <div className="col-3 link">
          <Link to="/contact" className="white">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
