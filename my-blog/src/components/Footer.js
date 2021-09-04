import React from "react";
import "./Footer.css";
import fide from "../assets/fide.png";
import vector2 from "../assets/vector2.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <div className="fixed-bottom">
      <div className="wrapper-film">
        <div className="wrapper-company">
          <div className="logoCompany">
            <img src={vector2} alt="Chess pieces" title="Chess pieces" />
            <div className="textCompany ">
              <span>International Chess Federation</span>
              <span>
                The International Chess Federation (FIDE) is the governing body
                of the sport of chess, and it regulates all international chess
                competitions.
              </span>
              <span>Lausanne ,Switzerland</span>
            </div>
          </div>

          <div className="fide-logo">
            <a href="/">
              <img src={fide} alt="fide" title="fide" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
