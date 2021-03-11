import React from "react";
import male from "../../Photo/male.png";
import female from "../../Photo/female.png";
import "./DetailCard.css";
import {
  faFlag,
  faFutbol,
  faMarsStroke,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DetailCard = (props) => {
  const {
    strLeague,
    intFormedYear,
    strCountry,
    strSport,
    strGender,
  } = props.league;
  let imageShow = "";

  imageShow =
    strGender === "Female" ? (
      <img className="h-100 w-100 w-md-75" src={female} alt="" />
    ) : (
      <img className="h-100 w-100 w-md-75" src={male} alt="" />
    );
  return (
    <div className="container pt-4">
      <div className="row px-3">
        <div className="details p-3">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center ps-3 p-md-5">
              <div className="mt-3 mt-md-0">
                <h4>{strLeague}</h4>
                <p className="mt-4 d-flex align-items-center">
                  <FontAwesomeIcon className="icons" icon={faMedal} />
                  <span className="ms-3">Founded: {intFormedYear}</span>
                </p>
                <p className=" d-flex align-items-center">
                  <FontAwesomeIcon className="icons" icon={faFlag} />
                  <span className="ms-3">Country: {strCountry}</span>
                </p>
                <p className=" d-flex align-items-center">
                  <FontAwesomeIcon className="icons" icon={faFutbol} />
                  <span className="ms-3">Sport Type: {strSport}</span>
                </p>
                <p className=" d-flex align-items-center">
                  <FontAwesomeIcon
                    className="icons icons-last"
                    icon={faMarsStroke}
                  />
                  <span className="ms-3">Gender: {strGender}</span>
                </p>
              </div>
            </div>
            <div className="col-md-6">{imageShow}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
