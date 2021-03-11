import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./League.css";

const League = (props) => {
  const { idLeague, strLeague, strSport } = props.league;
  const [badge, setBadge] = useState("");

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBadge(data.leagues[0].strBadge));
  }, [idLeague]);
  return (
    <div className="col-sm-6 col-md-6 col-lg-4 p-3">
      <div className="card my-card d-flex align-items-center justify-content-center p-1">
        <div className="mt-3">
          <img className="card-img-top" src={badge} alt={strLeague} />
          <div className="card-body mt-4">
            <h5 className="card-title my-title">{strLeague}</h5>
            <p className="card-text my-text">Sport type: {strSport}</p>
            <Link to={`/league/${idLeague}`}>
              <button className="btn btn-primary my-btn mt-2">
                Explore
                <span className="ms-1 arrow">
                  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default League;
