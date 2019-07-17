import React, { useState, useEffect } from "react";
import contactValues from "../FormValues/contactFormValues";
import Axios from "axios";

const Contact = () => {
  const [submit, setSubmit] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [valid, setValid] = useState(false);
  const [touched, setTouch] = useState(false);
  const red = "red";
  const green = "green";

  const checkValid = () => {
    const responseErr = {};
    console.log(responseErr);
    if (email.length === 0) responseErr.email = "Invalid Email";
    if (name.length === 0) responseErr.name = "Must have an Name";
    if (responseErr.email || responseErr.name) return responseErr;
    setValid(true);
  };

  const submitForm = async () => {
    setTouch(true);
    checkValid();
    if (valid) {
      const values = {
        email,
        name
      };
      const response = await Axios.post("/newsletter", values);
      console.log(response);
      setSubmit(true);
    }
  };
  const renderField = () => {
    return (
      <div>
        <div className="form-group">
          <label>Name</label>
          <input
            type="name"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Name Pionner"
            onChange={e => setName(e.target.value)}
          />
          <div className="red small">
            {touched && name.length === 0 ? "Invalid" : ""}
          </div>
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@Pionner.com"
            onChange={e => setEmail(e.target.value)}
          />
          <div className="red small">
            {touched && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
              ? "Invalid Email"
              : ""}
          </div>
        </div>
      </div>
    );
  };

  const renderForm = () => {
    if (!submit) {
      return (
        <>
          <div className="spacer" />
          <div className="col-md-6 offset-md-3 bg-trans ">
            <div className="title p-3">Contact us!</div>
            <div className="contact-bio">
              We take the time to respond to every email - we love to help our
              community in any way.
            </div>
            <form onSubmit={() => submitForm()}>
              <div className="mt-2">{renderField()}</div>
              <button
                className="btn btn-success mb-5 offset-6 w-50 mt-3"
                type="submit"
                onClick={e => {
                  e.preventDefault();
                  setTouch(true);
                  submitForm();
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </>
      );
    } else
      return (
        <>
          <div className="spacer" />
          <div className="col-md-6 offset-md-3 bg-trans ">
            <div className="title p-3">Contact us!</div>
            <div className="contact-bio">
              We take the time to respond to every email - we love to help our
              community in any way.
            </div>
            <div className="offset-3 col-6 mt-5 text-center text-dark">
              We will get back to you as soon as possible {name}!
            </div>
          </div>
        </>
      );
  };

  return <div className="full-screen bg-star ">{renderForm()}</div>;
};

export default Contact;
