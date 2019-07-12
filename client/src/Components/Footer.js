import React, { useState } from "react";
import axios from "axios";

function Footer() {
  const [value, setValue] = useState({ email: "" });
  const renderFooter = () => {
    // Submitting email to newsletter
    const SubmitNewsletter = async e => {
      console.log(value.email);
      //   e.preventDefault();
      console.log("called");
      await axios.post("/newsletter", value);
      return <div>SUCCESS</div>;
    };

    return (
      <div className=" footer mt-5 fixed-bottom">
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
      </div>
    );
  };
  return <div>{renderFooter()}</div>;
}

export default Footer;
