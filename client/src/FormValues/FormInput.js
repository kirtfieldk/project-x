import React from "react";

const FormInput = ({ input, label, meta: { touched, error } }) => {
  const placeholder = `${label} Adventurer!`;
  if (touched && error) {
    return (
      <div className="form-group">
        <label for={label}>{label}</label>
        <input
          {...input}
          type={input}
          className="form-control"
          placeholder={placeholder}
        />
      </div>
    );
  }
  return (
    <div className="form-group">
      <label for={label}>{label}</label>
      <input
        {...input}
        type={input}
        className="form-control"
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInput;
