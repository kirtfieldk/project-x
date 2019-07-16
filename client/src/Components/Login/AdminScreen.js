import React, { useState } from "react";
import RenderLinkRead from "../sub-comp/RenderLinkReads";
const AdminScreen = () => {
  const [display, setDisplay] = useState("outsource");
  return (
    <div className="container bg-light rounded shadow mt-3">
      <h3 className="text-center">Admin Page</h3>
      <div className="row">
        <div className="col-3">
          <div
            className="col-12 pt-3 border-bottom select"
            onCLick={() => setDisplay("blogpost")}
          >
            Blog Post
          </div>
          <div
            className="col-12 pt-3 border-bottom select"
            onCLick={() => setDisplay("podcast")}
          >
            Podcasts
          </div>
          <div
            className="col-12 pt-3 border-bottom select"
            onCLick={() => setDisplay("favPodcast")}
          >
            Favorite Podcast
          </div>
          <div
            className="col-12 pt-3 border-bottom select"
            onCLick={() => setDisplay("linkReads")}
          >
            Link Reads
          </div>
          <div
            className="col-12 pt-3 border-bottom select"
            onCLick={() => setDisplay("images")}
          >
            Images
          </div>
          <div
            className="col-12 pt-3 border-bottom select"
            onCLick={() => setDisplay("newletter")}
          >
            Newsletter
          </div>
        </div>
        <div className=" col-5">
          <RenderLinkRead deleteProp="true" />
        </div>
      </div>
    </div>
  );
};

export default AdminScreen;
