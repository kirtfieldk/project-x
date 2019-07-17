import React from "react";
import RenderLinkReads from "../../sub-comp/RenderLinkReads";

function AdminOutsource() {
  return (
    <div className=" bg-light mt-3 ml-3 col-8 bg-light mt-3 ">
      <div className="col-8">
        <RenderLinkReads deleteProp="true" />
      </div>
      <div className="col-3" />
    </div>
  );
}

export default AdminOutsource;
