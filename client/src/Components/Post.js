import React from "react";
import LinkOutsource from "./sub-comp/RenderList/RenderLinkReads";
import RenderPodcast from "./sub-comp/RenderList/RenderPodcast";
function Post() {
  return (
    <>
      <div className="col-8 mt-3 offset-2 border-bottom border-top post-bio mb-5">
        We deliver content every Monday and Thursday through our social media
      </div>
      {/* One Row */}
      <div className="row">
        <div className="col-5   ml-3">
          <div>
            {/* Linked outSource */}
            <LinkOutsource />
          </div>
        </div>
        {/* Linked Podcast */}
        <div className="col-2 mt-3 offset-4">
          <RenderPodcast />
        </div>
      </div>
      {/* End Of Row */}
    </>
  );
}
export default Post;
