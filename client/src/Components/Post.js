import React from "react";
import { connect } from "react-redux";
function Post() {
  return <div />;
}
const mapStateToProps = state => {
  console.log(state);
};
export default connect(mapStateToProps)(Post);
