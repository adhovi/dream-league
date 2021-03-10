import React from "react";
import "./Description.css";

const Description = (props) => {
  const { description1, description2 } = props;
  return (
    <div className="row px-3 mt-5">
      <h3 className="description-title mt-3">English Description:</h3>
      <p className="description mt-2">{description1}</p>
      <h3 className="description-title mt-3">French Description:</h3>
      <p className="description mt-2">{description2}</p>
    </div>
  );
};

export default Description;
