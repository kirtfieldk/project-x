import React, { useState } from "react";
import { connect } from "react-redux";
import PopupDelete from "../PopupDelete";
import * as actions from "../../../Actions";
import axios from "axios";

const RenderLinkReads = ({ listLinkRead, deleteProp, fetchOutsource }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [id, setId] = useState("");
  const [popUp, showPopUp] = useState(false);

  const deleteBlogPost = async () => {
    await axios.delete(`/outsourcelinks/${id}`);
    fetchOutsource();
    showPopUp(false);
  };
  const renderList = () => {
    if (listLinkRead.length === 0) {
      return <div className="border-bottom">Loading</div>;
    } else {
      return listLinkRead.map(doc => {
        if (deleteProp) {
          return (
            <div className="border-bottom hover-change ml-3 mt-3" key={doc.id}>
              <button
                onClick={() => {
                  setTitle(doc.values.title);
                  setDesc(doc.values.desc);
                  setId(doc.id);
                  showPopUp(true);
                }}
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
  const showModel = () => {
    if (popUp) {
      return (
        <PopupDelete title={title} desc={desc} deleteFun={deleteBlogPost} />
      );
    }
  };

  // FINAL RETURN
  return (
    <div>
      {renderList()}
      <span className="ml-5 float-right">{showModel()}</span>
    </div>
  );
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
