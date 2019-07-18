import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../Actions";
import Axios from "axios";
function RenderBlogpost({ blogpostList, deleteBlogPost, fetchBlogpost }) {
  console.log(blogpostList);
  const deletePost = async id => {
    await Axios.delete(`/blogpost/delete/${id}`);
    fetchBlogpost();
  };
  const renderList = () => {
    if (blogpostList.length === 0)
      return <div className="mt-5 text-center col-8">Loading</div>;

    return blogpostList.map(doc => {
      console.log(doc.id);
      return (
        <div className="border-bottom hover-change ml-3 mt-3" key={doc.id}>
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
          <h5>{doc.body.title}</h5>
          <p className="font-weight-lighter light mt-neg-5">{doc.body.desc}</p>
        </div>
      );
    });
  };

  return <div>{renderList()}</div>;
}

const mapStateToProps = ({ blogpostList }) => {
  return {
    blogpostList
  };
};

export default connect(
  mapStateToProps,
  actions
)(RenderBlogpost);
