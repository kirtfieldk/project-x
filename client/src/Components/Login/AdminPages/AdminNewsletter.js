import React, { useState } from "react";
import RenderNewsletter from "../../sub-comp/RenderList/RenderNewsletter";
import AddDelete from "../../sub-comp/Add-Delete";

function AdminNewsletter() {
  const [edit, setEdit] = useState(true);
  const [add, setAdd] = useState(false);
  console.log(edit);
  const addEdit = () => {
    setAdd(false);
    setEdit(true);
  };
  const addPost = () => {
    setEdit(false);
    setAdd(true);
  };
  const renderInfo = () => {
    if (edit) {
      return (
        <div className="col-12">
          <RenderNewsletter deleteNewsletter="true" />
        </div>
      );
    }
    return <div>Keith</div>;
  };
  return (
    <div className="mt-3 bg-light col-8 ml-3">
      <div className="title mt-3 col-12">Newsletter Signup</div>
      <div className="col-12">
        <AddDelete addEdit={addEdit} addPost={addPost} />
      </div>
      {renderInfo()}
    </div>
  );
}

export default AdminNewsletter;
