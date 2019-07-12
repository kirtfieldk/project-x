import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
const RenderLinkReads = ({ listLinkRead }) => {
  const [displayList, setDisplayList] = useState(false);

  const renderList = () => {
    if (!displayList) {
      return <div className="border-bottom">Loading</div>;
    } else {
      return listLinkRead.map(doc => {
        return (
          <div className="border-bottom mt-3" key={doc.values.title}>
            <h5>{doc.values.title}</h5>
            <p className="font-weight-lighter light mt-neg-5">{doc.values.desc}</p>
          </div>
        );
      });
    }
  };

  const renderDisplay = () => {
    // if (displayList === false) {
    //   return <div className="ml-3 mt-3  border-bottom">LOADING</div>;
    // }
    return (
      <div className=" mt-3">
        <div>{renderList()}</div>
      </div>
    );
  };
  useEffect(() => {
    if (listLinkRead.length > 0) setDisplayList(true);
  }, [listLinkRead]);
  return <div>{renderDisplay()}</div>;
};

const mapStateToProps = ({ listLinkRead }) => {
  return {
    listLinkRead
  };
};
export default connect(mapStateToProps)(RenderLinkReads);
