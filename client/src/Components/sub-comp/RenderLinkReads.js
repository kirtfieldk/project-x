import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { deleteBlogPost } from "../../Actions";

import * as actions from "../../Actions";

const RenderLinkReads = ({ listLinkRead, deleteProp, deleteOutsource }) => {
  const [displayList, setDisplayList] = useState(false);

  const deleteBlogPost = value => {
    deleteOutsource(value);
  };
  const renderList = () => {
    if (!displayList) {
      return <div className="border-bottom">Loading</div>;
    } else {
      return listLinkRead.map(doc => {
        console.log(doc.id);
        if (deleteProp) {
          return (
            <div className="border-bottom hover-change mt-3" key={doc.id}>
              <button
                onClick={() => deleteBlogPost(doc.id)}
                type="button"
                className="close float-right"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <a href={doc.values.link} target="_target">
                <h5>{doc.values.title}</h5>
              </a>
              <p className="font-weight-lighter light mt-neg-5">
                {doc.values.desc}
              </p>
            </div>
          );
        }
        return (
          <div className="border-bottom hover-change mt-3" key={doc.id}>
            <a href={doc.values.link} target="_target">
              <h5>{doc.values.title}</h5>
            </a>
            <p className="font-weight-lighter light mt-neg-5">
              {doc.values.desc}
            </p>
          </div>
        );
      });
    }
  };

  const renderDisplay = () => {
    return (
      <div className=" mt-3">
        <div>{renderList()}</div>
      </div>
    );
  };
  useEffect(() => {
    if (listLinkRead.length > 0) setDisplayList(true);
  }, [listLinkRead]);

  // FINAL RETURN
  return <div>{renderDisplay()}</div>;
};

const mapStateToProps = ({ listLinkRead }) => {
  return {
    listLinkRead
  };
};
export default connect(
  mapStateToProps,
  actions
)(RenderLinkReads);
