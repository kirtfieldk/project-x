import React from "react";

const FormInput = ({ input, label, meta: { touched, error } }) => {
  if (touched && error) {
    return (
      <div className="form-group">
        <label for={label}>Email</label>
        <input
          {...input}
          type={input}
          className="form-control"
          placeholder="Pionrer@exploration.com"
        />
      </div>
    );
  }
  return (
    <div className="form-group">
      <label for={label}>Email</label>
      <input
        {...input}
        type={input}
        className="form-control"
        placeholder="Pionrer@exploration.com"
      />
    </div>
  );
};

export default FormInput;
