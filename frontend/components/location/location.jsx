import React from "react";
// import RestaurantFeaturedItem from "./restaurant_featured_item";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

export class Location extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <section className="locations">
          <div className="location-header">
            <h2>Featured Areas</h2>
          </div>
          <CSSTransition
            in={true}
            appear={true}
            timeout={300}
            classNames="fade"
          >
            <ul className="locations-container">
              <li className="location">
                <Link id="NewYork" to="/restaurants?location=New-York">
                  New York
                </Link>
              </li>
              <li className="location">
                <Link id="Chicago" to="/restaurants?location=Chicago">
                  Chicago
                </Link>
              </li>
              <li className="location">
                <Link id="LosAngeles" to="/restaurants?location=Los-Angeles">
                  Los Angeles
                </Link>
              </li>
              <li className="location">
                <Link
                  id="SanFrancisco"
                  to="/restaurants?location=San-Francisco"
                >
                  San Francisco
                </Link>
              </li>
              <li className="location">
                <Link id="Miami" to="/restaurants?location=Miami">
                  Miami
                </Link>
              </li>
              <li className="location">
                <Link id="LasVegas" to="/restaurants?location=Las-Vegas">
                  Las Vegas
                </Link>
              </li>
            </ul>
          </CSSTransition>
        </section>
      </>
    );
  }
}
export default Location;
