import React from "react";
import { CSSTransition } from "react-transition-group";
import SearchFormContainer from "./search/search_form_container";
import { Route, Link } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
export const Banner = props => {
  debugger;
  return (
    <CSSTransition in={true} appear={true} timeout={300} classNames="fade">
      <section className="banner">
        <div className="container">
          <h2>Never wait for an open table again.</h2>
          <SearchFormContainer passSearch={props.passSearch} />
        </div>
      </section>
    </CSSTransition>
  );
};
