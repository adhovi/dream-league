import React from "react";
import "./Footer.css";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Footer = (props) => {
  const { strTwitter, strFacebook, strYoutube } = props.league;

  return (
    <div className="row">
      <div className="icons mt-5 pb-5">
        <ul className="d-flex justify-content-center ">
          <li>
            {strTwitter ? (
              <a
                className="icon-twitter"
                href={`https://${strTwitter}`}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            ) : (
              <Link className="icon-twitter" to="/error">
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
            )}
          </li>
          <li>
            {strFacebook ? (
              <a
                className="icon-facebook"
                href={`https://${strFacebook}`}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            ) : (
              <Link className="icon-facebook" to="/error">
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
            )}
          </li>
          <li>
            {strYoutube ? (
              <a
                className="icon-youtube"
                href={`https://${strYoutube}`}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            ) : (
              <Link className="icon-youtube" to="/error">
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
