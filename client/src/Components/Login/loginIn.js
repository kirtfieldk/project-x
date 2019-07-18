import React from "react";
import { connect } from "react-redux";
import LogininForm from "./LogininForm";
import AdminScreen from "./AdminScreen";

const loginIn = ({ loginToken }) => {
  const renderProfile = () => {
    if (loginToken === false) {
      return (
        <div>
          <LogininForm />
        </div>
      );
    } else {
      return (
        <div>
          <AdminScreen />
        </div>
      );
      // }
    }
  };
  return <div>{renderProfile()}</div>;
};
const mapStateToProps = state => {
  return {
    loginToken: state.loginToken
  };
};
export default connect(mapStateToProps)(loginIn);
