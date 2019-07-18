import React, { useState } from "react";
import axios from "axios";

function AddNewsletter() {
  const [person, setPerson] = useState({});
  const [touch, setTouch] = useState(false)

  const sendEmail = () => {
      setTouch(true)
      await axios.post("/newsletter", person)
  };
  return <div />;
}

export default AddNewsletter;
