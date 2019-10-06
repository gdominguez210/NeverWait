import React from "react";
import { CSSTransition } from "react-transition-group";

export const Banner = () => (
  <CSSTransition in={true} appear={true} timeout={300} classNames="fade">
    <section className="banner">
      <div className="container">
        <h2>Never wait for an open table again.</h2>
      </div>
    </section>
  </CSSTransition>
);
