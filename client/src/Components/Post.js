import React from "react";
import LinkOutsource from "./sub-comp/RenderLinkReads";
function Post() {
  return (
    <>
      <div className="col-8 mt-5 offset-2 border-bottom border-top post-bio">
        We deliver content every Monday and Thursday through our social media
      </div>
      <div className="col-5   ml-3">
        <div>
          <LinkOutsource />
        </div>
      </div>
    </>
  );
}
export default Post;
