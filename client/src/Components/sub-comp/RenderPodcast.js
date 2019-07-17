import React from "react";
import { connect } from "react-redux";
import * as actions from "../../Actions";
import Axios from "axios";
const RenderPodcast = ({ podcastList, deletePod, fetchPodcast }) => {
  const deletePost = async id => {
    await Axios.delete(`/podcast/delete/${id}`);
    fetchPodcast();
  };
  console.log(podcastList);
  const renderPodList = () => {
    return podcastList.map(doc => {
      return (
        <div className="border-bottom hover-change" key={doc.id}>
          <a href={doc.values.link} target="_target">
            {deletePod ? (
              <button
                onClick={() => {
                  deletePost(doc.id);
                }}
                type="button"
                className="close float-right"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            ) : (
              <div />
            )}
            <h5>{doc.values.title}</h5>
          </a>
          <p className="font-weight-lighter light mt-neg-5">
            {doc.values.desc}
          </p>
        </div>
      );
    });
  };
  return (
    <div>
      <div className="title mt-3">Podcast</div>
      {renderPodList()}
    </div>
  );
};
const mapStateToProps = ({ podcastList }) => {
  return {
    podcastList
  };
};
export default connect(
  mapStateToProps,
  actions
)(RenderPodcast);
