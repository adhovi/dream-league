import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Description from "../Description/Description";
import DetailCard from "../DetailCard/DetailCard";
import Footer from "../Footer/Footer";
import "./LeagueDetail.css";
import banner from "../../Photo/header1.png";

const LeagueDetail = () => {
  const { id } = useParams();
  const [leagueDetail, setLeagueDetail] = useState([]);

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setLeagueDetail(data.leagues[0]));
  }, [id]);

  const {
    strBanner,
    strLeague,
    strBadge,
    strDescriptionEN,
    strDescriptionFR,
  } = leagueDetail;

  const backGround = strBanner ? `url(${strBanner})` : `url(${banner})`;
  const [vhHeight, setVhHeight] = useState("40vh");

  useEffect(() => {
    const handleResize = () => {
      if (window.screen.width <= 500) {
        setVhHeight("25vh");
      } else if (window.screen.width <= 768) {
        setVhHeight("30vh");
      } else if (window.screen.width <= 992) {
        setVhHeight("35vh");
      } else {
        setVhHeight("40vh");
      }
    };
    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);
  }, []);

  const bannerHeader = {
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1),rgba(255, 255, 255, 0.1)),${backGround}`,
    height: `${vhHeight}`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  return (
    <div>
      <div style={bannerHeader} className="detail-header">
        <div className="detail-header d-flex justify-content-center align-items-center text-white">
          <img src={strBadge} alt={strLeague}></img>
        </div>
      </div>

      <div className="dark-container">
        <div className="container">
          <DetailCard league={leagueDetail}></DetailCard>
          <Description
            description1={strDescriptionEN}
            description2={strDescriptionFR}
          ></Description>
          <Footer league={leagueDetail}></Footer>
        </div>
      </div>
    </div>
  );
};

export default LeagueDetail;
