import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import Modal from "./modal/modal";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Footer = () => (
  <>
    <footer>
      <p>
        Copyright © 2019 OpenTable, Inc. 1 Montgomery St Ste 700, San Francisco
        CA 94104 - All rights reserved.
      </p>
      <div class="icon-container">
        <FontAwesomeIcon icon="github" />
      </div>
    </footer>
  </>
);
