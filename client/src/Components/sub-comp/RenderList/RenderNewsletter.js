import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import * as actions from "../../../Actions";

const RenderNewsletter = ({ deleteNewsletter, newsletter, getNewsletter }) => {
  const deletePost = async value => {
    await axios.delete(`/newsletter/${value}`);
    getNewsletter();
  };
  const renderList = () => {
    if (newsletter === null) {
      return <div>Loading</div>;
    } else {
      return newsletter.map(doc => {
        if (deleteNewsletter) {
          return (
            <div className="border-bottom hover-change mt-3" key={doc.id}>
              <button
                onClick={() => deletePost(doc.id)}
                type="button"
                className="close float-right"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h5>{doc.values.email}</h5>
            </div>
          );
        }
        return (
          <div className="border-bottom hover-change mt-3" key={doc.id}>
            <h5>{doc.value.email}</h5>
          </div>
        );
      });
    }
  };
  return (
    <div className="ml-3">
      {renderList()}
    </div>
  );
};

const mapStateToProps = ({ newsletter }) => {
  return { newsletter };
};
export default connect(
  mapStateToProps,
  actions
)(RenderNewsletter);
