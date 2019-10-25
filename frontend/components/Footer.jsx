import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import Modal from "./modal/modal";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Footer = () => (
  <>
    <footer>
      <div className="inner-container">
        <p>Copyright © 2019 NeverWait - Gary Dominguez.</p>
        <div className="icon-container">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </div>
      </div>
    </footer>
  </>
);
