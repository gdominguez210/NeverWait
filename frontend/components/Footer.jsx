import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import Modal from "./modal/modal";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);
export const Footer = () => (
  <>
    <footer>
      <div className="inner-container">
        <p>Copyright © 2019 NeverWait - Gary Dominguez.</p>
        <div className="icon-container">
          <a href="https://github.com/gdominguez210" target="_blank">
            <span className="icon">
              <FontAwesomeIcon icon={["fab", "github"]} />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/gary-dominguez/" target="_blank">
            <span className="icon">
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  </>
);
