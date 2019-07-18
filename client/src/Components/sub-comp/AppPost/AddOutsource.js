import React, { useState } from "react";
import * as actions from "../../../Actions";
import { connect } from "react-redux";

const AddOutsource = ({ addOutsource }) => {
  // Needed states
  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [touched, setTouch] = useState(false);
  // ///////////////////////////////////////////////////////////////////////////////////////////
  const validForm = () => {
    console.log("called");
    if (desc.trim() === "" || title.trim() === "" || link.trim() === "")
      return false;
    return true;
  };
  const sendForm = () => {
    setTouch(true);
    console.log(touched);
    if (validForm()) {
      const values = {
        desc,
        title,
        link
      };
      addOutsource(values);
      setTouch(false);
      setDesc("");
      setTitle("");
      setLink("");
    }
  };
  const renderForm = () => {
    return (
      <form>
        <div className="red text-small text-center">
          {touched && !validForm() ? "All fields must be filled!" : ""}
        </div>

        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Title"
          />
          <small className="form-text text-muted">We need a title</small>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            value={desc}
            className="form-control"
            onChange={e => setDesc(e.target.value)}
            placeholder="Short Desc"
          />
        </div>
        <div className="form-group">
          <label>Link</label>
          <input
            type="text"
            value={link}
            className="form-control"
            onChange={e => setLink(e.target.value)}
            placeholder="Link"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={e => {
            e.preventDefault();
            sendForm();
          }}
        >
          Submit
        </button>
      </form>
    );
  };

  return <div className="ml-3 mt-3 pb-5">{renderForm()}</div>;
};

export default connect(
  null,
  actions
)(AddOutsource);
