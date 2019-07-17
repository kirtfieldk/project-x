import React from "react";
import RenderNewsletter from "../../sub-comp/RenderNewsletter";

function AdminNewsletter() {
  return (
    <div className="mt-3 bg-light col-8 ml-3">
      <div className="col-12">
        <RenderNewsletter deleteNewsletter="true" />
      </div>
    </div>
  );
}

export default AdminNewsletter;
