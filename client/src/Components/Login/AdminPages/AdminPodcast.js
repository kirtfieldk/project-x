import React from "react";
import RenderPodcast from "../../sub-comp/RenderPodcast";
function AdminPodcast() {
  return (
    <div className="mt-3 bg-light col-8 ml-3">
      <div className="col-12">
        <RenderPodcast deletePod="false" />
      </div>
    </div>
  );
}

export default AdminPodcast;
