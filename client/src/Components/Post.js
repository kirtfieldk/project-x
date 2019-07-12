import React from "react";
import LinkOutsource from "./sub-comp/RenderLinkReads";
import RenderPodcast from "./sub-comp/RenderPodcast";
function Post() {
  return (
    <>
      <div className="col-8 mt-3 offset-2 border-bottom border-top post-bio mb-5">
        We deliver content every Monday and Thursday through our social media
      </div>
      <div className="row">
        <div className="col-5   ml-3">
          <div>
            <LinkOutsource />
          </div>
        </div>
        <div className="col-2 mt-3 offset-4">
          <RenderPodcast />
        </div>
      </div>
    </>
  );
}
export default Post;
