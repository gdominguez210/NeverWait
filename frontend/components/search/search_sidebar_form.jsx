import React from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import renderLoader from "../loader/loader";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);
class SearchSidebarForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: {}
    };
  }

  update(field) {
    const query = { ...this.state.query };

    // return e => {
    //     if
    // }
  }

  ratings() {
    return (
      <div className="rating-options">
        <p>
          <span className="icon">
            <FontAwesomeIcon icon="star" />
          </span>
          Rating
        </p>
        <button>5 Stars</button>
        <button>4 Stars</button>
        <button>3 Stars</button>
        <button>2 Stars</button>
        <button>1 Star</button>
      </div>
    );
  }
  map() {}
  priceRanges() {
    return (
      <div className="price-options">
        <p>
          <span className="icon">
            <FontAwesomeIcon icon="money-bill" />
          </span>{" "}
          Price{" "}
        </p>
        <div className="price-buttons">
          <button>
            <span className="icon">
              <FontAwesomeIcon icon="dollar-sign" />
            </span>
          </button>
          <button>
            <span className="icon">
              <FontAwesomeIcon icon="dollar-sign" />
            </span>
            <span className="icon">
              <FontAwesomeIcon icon="dollar-sign" />
            </span>
          </button>
          <button>
            <span className="icon">
              <FontAwesomeIcon icon="dollar-sign" />
            </span>
            <span className="icon">
              <FontAwesomeIcon icon="dollar-sign" />
            </span>
            <span className="icon">
              <FontAwesomeIcon icon="dollar-sign" />
            </span>
          </button>
        </div>
      </div>
    );
  }

  neighborHoods() {}

  render() {
    return (
      <div className="filter-options">
        {this.priceRanges()}
        {this.ratings()}
      </div>
    );
  }
}

export default SearchSidebarForm;
