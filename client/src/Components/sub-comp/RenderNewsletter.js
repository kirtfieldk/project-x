import React from "react";
import { connect } from "react-redux";
import axios from "axios";

const RenderNewsletter = ({ deleteNewsletter, newsletter }) => {
  const deletePost = async value => {
    await axios.delete(`/newsletter/${value}`);
  };
  return newsletter.map(doc => {
    if (deleteNewsletter) {
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
        <p className="font-weight-lighter light mt-neg-5">{doc.values.desc}</p>
      </div>
    );
  });
};
const mapStateToProps = ({ newsletter }) => {
  return { newsletter };
};
export default connect(mapStateToProps)(RenderNewsletter);
