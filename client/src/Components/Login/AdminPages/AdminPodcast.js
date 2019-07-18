import React, { useState } from "react";
import RenderPodcast from "../../sub-comp/RenderList/RenderPodcast";
import AddDelete from "../../sub-comp/Add-Delete";
import AddPodcast from "../../sub-comp/AppPost/AddPodcast";
function AdminPodcast() {
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
          <RenderPodcast deletePod="false" />
        </div>
      );
    } else
      return (
        <div>
          <AddPodcast />
        </div>
      );
  };
  return (
    <div className="mt-3 bg-light col-8 ml-3">
      <div className="title mt-3">Podcast</div>
      <div className="col-12">
        <AddDelete addEdit={addEdit} addPost={addPost} />
      </div>
      {renderPage()}
    </div>
  );
}

export default AdminPodcast;
