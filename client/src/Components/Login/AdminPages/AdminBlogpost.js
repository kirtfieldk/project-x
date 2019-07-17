import React from "react";
import RenderBlogpost from "../../sub-comp/RenderBlogpost";
function AdminBlogpost() {
  return (
    <div className="mt-3 bg-light col-8 ml-3">
      <div className="col-12">
        <RenderBlogpost deleteNewsletter="true" />
      </div>
    </div>
  );
}

export default AdminBlogpost;
