import React from "react";

const AddDelete = ({ addEdit, addPost }) => {
  return (
    <div className="mb-3 ml-3">
      <button
        className="btn btn-outline-danger border-rightless "
        onClick={addEdit}
      >
        DeletePost
      </button>
      <button
        className="btn btn-outline-success border-leftless "
        onClick={addPost}
      >
        AddPost
      </button>
    </div>
  );
};

export default AddDelete;
