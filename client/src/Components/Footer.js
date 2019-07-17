import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../Actions";
// TODO flush out the submit newletter method
const Footer = props => {
  const [value, setValue] = useState({ email: "" });
  // Checks if the email is valid
  const isValidEmail = () => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = re.test(String(value.email).toLowerCase());

    return isValid;
  };

  const SubmitNewsletter = async e => {
    props.SubmitNewsletter(value);
  };

  const renderFooter = () => {
    if (props.newsletter) {
      return (
        <>
          {/* Titles of both sides */}
          <div className="row">
            <div className="col-6 ml-2">
              <p className="social">Connect through our socials</p>
            </div>
            <div className="col-3 offset-2 ">
              <p className="Social">Sign up for our monthly newsletter</p>
            </div>
          </div>
          {/* END OF ROW ONE */}
          <div className="row">
            <div className="col-5 pb-3">
              <i className="fab fa-instagram col-1" />
              <i className="fab fa-twitter col-1" />
              <i className="fab fa-youtube col-1" />
              <i className="fab fa-linkedin-in col-1" />
            </div>
            <div className="pb-4 offset-3">
              <div className="row center green border-bottom">
                {props.newsletter.msg}
              </div>
            </div>
          </div>
        </>
      );
    }
    return (
      <>
        {/* Titles of both sides */}
        <div className="row">
          <div className="col-6 ml-2">
            <p className="social">Connect through our socials</p>
          </div>
          <div className="col-3 offset-2 ">
            <p className="Social">Sign up for our monthly newsletter</p>
          </div>
        </div>
        {/* END OF ROW ONE */}
        <div className="row">
          <div className="col-5 pb-3">
            <i className="fab fa-instagram col-1" />
            <i className="fab fa-twitter col-1" />
            <i className="fab fa-youtube col-1" />
            <i className="fab fa-linkedin-in col-1" />
          </div>
          <div className="pb-3 offset-3">
            <form className="form-inline" onSubmit={() => SubmitNewsletter()}>
              <div className="row">
                <input
                  onChange={e => {
                    setValue({ email: e.target.value });
                    e.preventDefault();
                  }}
                  type="text"
                  className="form-control "
                  placeholder="email"
                  aria-label="Username"
                  aria-describedby="inputGroup-sizing-sm"
                />
                <button
                  onClick={e => {
                    e.preventDefault();
                    SubmitNewsletter();
                  }}
                  className="btn btn-outline-success ml-3"
                >
                  Sign Up!
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  };

  return <div className=" footer mt-5 sticky-bottom">{renderFooter()}</div>;
};


export default connect(
  null,
  actions
)(Footer);
