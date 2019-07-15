import React from "react";
import * as actions from "../../Actions";
import { connect } from "react-redux";
import RenderLinkRead from "../sub-comp/RenderLinkReads";
const AdminScreen = props => {
  console.log(props);

  return (
    <div className="container bg-light rounded shadow mt-3">
      <h3 className="text-center">Admin Page</h3>
      <div className="row">
        <div className="col-2">
          <div className="col-12 border-bottom">Blog Post</div>
          <div className="col-12 mt-3 border-bottom">Podcasts</div>
          <div className="col-12 mt-3 border-bottom">Favorite Podcast</div>
          <div className="col-12 mt-3 border-bottom">Link Reads</div>
          <div className="col-12 mt-3 border-bottom">Images</div>
        </div>
        <div className="offset-1 col-7">
          <RenderLinkRead deleteProp="true" />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({
  blogPostList,
  imageList,
  listLinkRead,
  podcastList
}) => {
  return {
    blogPostList,
    imageList,
    listLinkRead,
    podcastList
  };
};
export default connect(
  mapStateToProps,
  actions
)(AdminScreen);
