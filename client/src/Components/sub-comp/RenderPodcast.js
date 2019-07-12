import React from "react";
import { connect } from "react-redux";
const RenderPodcast = ({ podcastList }) => {
  console.log(podcastList);
  const renderPodList = () => {
    return podcastList.map(doc => {
      console.log(doc);
      return (
        <div className="border-bottom hover-change" key={doc.title}>
          <a href={doc.link} target="_target">
            <h5>{doc.title}</h5>
          </a>
          <p className="font-weight-lighter light mt-neg-5">{doc.desc}</p>
        </div>
      );
    });
  };
  return <div>{renderPodList()}</div>;
};
const mapStateToProps = ({ podcastList }) => {
  return {
    podcastList
  };
};
export default connect(mapStateToProps)(RenderPodcast);
