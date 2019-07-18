import React, { useState } from "react";
import axios from "axios";

const AddNewsletter = () => {
  const [person, setPerson] = useState({ email: "", name: "" });
  const [touch, setTouch] = useState(false);
  const [valid, setValid] = useState("");
  console.log(person);
  const isValid = () => {
    if (person.email == "" || person.name == "") return false;
    else return true;
  };
  const sendEmail = async () => {
    if (isValid()) {
      const response = await axios.post("/newsletter", person);
      console.log(response);
      setValid(response.data.msg);
    }
  };
  const renderForm = () => {
    return (
      <form>
        <div className="form-group">
          <div className="red text-center">
            {touch && !isValid() ? "No Blank Values" : ""}
          </div>
          <div className="green text-center">{valid}</div>
          <label>Email address</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={e => setPerson({ email: e.target.value, name:person.name })}
            placeholder="Enter email"
          />
          <small className="form-text text-muted">Add this USER!</small>
        </div>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            onChange={e => setPerson({ name: e.target.value, email: person.email })}
          />
        </div>
        <button
          className="btn btn-outline-success"
          type="submit"
          onClick={e => {
            setTouch(true);
            e.preventDefault();
            sendEmail();
          }}
        >
          Submit
        </button>
      </form>
    );
  };
  return <div className="col-12 ml-3 pb-5 mt-3">{renderForm()}</div>;
};

export default AddNewsletter;
