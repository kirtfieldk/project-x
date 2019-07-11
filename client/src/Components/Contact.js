import React, { useState } from "react";
import { reduxForm, Field } from "redux-form";
import FormInput from "../FormValues/FormInput";
import contactValues from "../FormValues/contactFormValues";

const Contact = () => {
  const [submit, setSubmit] = useState(false);
  const renderField = () => {
    contactValues.map(({ label, name }) => {
      console.log(label);
      return (
        <Field
          key={name}
          name={name}
          label={label}
          type="text"
          component={FormInput}
        />
      );
    });
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
            <form onSubmit={() => setSubmit(true)}>
              {renderField()}
              <button className="btn btn-primary">Submit</button>
            </form>
          </div>
        </>
      );
    }else return(
      <>
      <div className="spacer" />
      <div className="col-md-6 offset-md-3 bg-trans ">
        <div className="title p-3">Contact us!</div>
        <div className="contact-bio">
          We take the time to respond to every email - we love to help our
          community in any way.
        </div>
        </div>
        </>
    )
  };
  return <div className="full-screen bg-star ">{renderForm()}</div>;
};

const validate = values => {
  const error = {};
  contactValues.forEach(({ name }) => {
    if (!values[name]) {
      error[name] = "No empty values";
    }
  });
  return error;
};

export default reduxForm({
  validate,
  form: "contactFormValues",
  destroyOnUnmount: false
})(Contact);
