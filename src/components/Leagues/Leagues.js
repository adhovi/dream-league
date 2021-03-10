import React, { useEffect, useState } from "react";
import League from "../League/League";
import "./Leagues.css";

const Leagues = () => {
  const [leagues, setLeagues] = useState([]);
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const allLeagues = data.leagues;

        setLeagues(allLeagues);

        // const soccerLeague = allLeagues.slice(0, 21);
        // setLeagues(soccerLeague);
      });
  }, []);
  return (
    <div>
      <div className="header d-flex justify-content-center align-items-center text-white">
        <h1 className="header-title">Dream League</h1>
      </div>
      <div className="dark-container">
        <div className="container pt-4">
          <div className="row">
            {leagues.map((league) => (
              <League key={league.idLeague} league={league}></League>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leagues;
