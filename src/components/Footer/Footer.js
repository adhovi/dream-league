import React from "react";
import "./Footer.css";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = (props) => {
  const { strTwitter, strFacebook, strYoutube } = props.league;

  return (
    <div className="row">
      <div className="icons mt-5 pb-5">
        <ul className="d-flex justify-content-center ">
          <li>
            <a
              className="icon-twitter"
              href={strTwitter ? `https://${strTwitter}` : `/error`}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a
              className="icon-facebook"
              href={strFacebook ? `https://${strFacebook}` : `/error`}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
          <li>
            <a
              className="icon-youtube"
              href={strYoutube ? `https://${strYoutube}` : `/error`}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
