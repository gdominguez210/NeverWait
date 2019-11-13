import React from "react";
// import RestaurantFeaturedItem from "./restaurant_featured_item";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

export class Location extends React.Component {
  constructor(props) {
    debugger;
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.params !== prevProps.params) {
      this.setState({ params: this.props.params });
    }
  }

  handleClick(e) {
    e.preventDefault();
    let queryStr = e.target.id.split("-").join(" ");
    this.props
      .searchQuery({ query: { name: queryStr }, res: this.props.params })
      .then(() => this.props.history.push(`/search-restaurants`));
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
              <li className="location" id="New-York" onClick={this.handleClick}>
                New York
              </li>
              <li className="location" id="Chicago" onClick={this.handleClick}>
                Chicago
              </li>
              <li
                className="location"
                id="Los-Angeles"
                onClick={this.handleClick}
              >
                Los Angeles
              </li>
              <li
                className="location"
                id="San-Francisco"
                onClick={this.handleClick}
              >
                San Francisco
              </li>
              <li className="location" id="Miami" onClick={this.handleClick}>
                Miami
              </li>
              <li
                className="location"
                id="Las-Vegas"
                onClick={this.handleClick}
              >
                Las Vegas
              </li>
            </ul>
          </CSSTransition>
        </section>
      </>
    );
  }
}
export default withRouter(Location);
