import React, { useState } from "react";
import RenderLinkReads from "../../sub-comp/RenderList/RenderLinkReads";
import AddDelete from "../../sub-comp/Add-Delete";

function AdminOutsource() {
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
  const renderPage = () => {
    if (edit) {
      return (
        <div className="col-12">
          <RenderLinkReads deleteProp="true" />
        </div>
      );
    } else return <div>Keith</div>;
  };
  return (
    <div className=" bg-light mt-3 ml-3 col-8 bg-light mt-3 ">
      <div className="title mt-3">Linked Reads</div>
      <div className="col-5">
        <AddDelete addEdit={addEdit} addPost={addPost} />
      </div>
      {renderPage()}
    </div>
  );
}

export default AdminOutsource;
