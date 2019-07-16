import React from "react";

const PopupDelete = ({ title, desc, deleteFun }) => {
  if (!title && !desc) return;
  return (
    <div className="card" style={{width: "18rem"}}>
      <div className="card-body">
        <h5 className="card-title">Delete {title}</h5>
        <p className="card-text text-muted">{desc}</p>
        <button className="btn mr-5 btn-outline-secondary">Cancel</button>
        <button className="btn ml-5 btn-outline-danger" onClick={() => deleteFun()}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default PopupDelete;
