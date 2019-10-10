import React from "react";
import { withRouter } from "react-router-dom";
import AdditionalItems from "./additional_items";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class RestaurantForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.restaurant;
    this.update = this.update.bind(this);
  }
  componentDidMount() {
    if (!this.state.owner_id && !this.state.location_id) {
      this.setState({
        owner_id: this.props.currentUser.id,
        location_id: 1,
        lat: 11.111,
        long: 111.111
      });
    }
  }
  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(action => {
       ;
      return this.props.history.push(`restaurants/${action.restaurant.id}`);
    });
  }
  handleSubheader() {
    if (this.props.formType === "Create Restaurant") {
      return (
        <div className="form-subheader">
          <h3>Additional Information</h3>
          <p>
            The following fields are optional, and not needed to create your
            restaurant. Feel free to skip this information for now, and update
            your restaurant information later.
          </p>
        </div>
      );
    } else {
      return null;
    }
  }
  renderErrors() {
    const errors = this.props.errors;
    if (errors.length > 0) {
      return (
        <ul className="errors">
          {errors.map((error, i) => (
            <li className="error" key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }
  render() {
    return (
      <div className="restaurant-form-container">
        <h1>{this.props.formType}</h1>
        <form className="restaurant-form" onSubmit={this.handleSubmit}>
          <div className="mandatory-input">
            <div className="col-4">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Name *"
                value={this.state.name}
                onChange={this.update("name")}
              />
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                placeholder="Address *"
                value={this.state.address}
                onChange={this.update("address")}
              />
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                placeholder="Phone *"
                value={this.state.phone}
                onChange={this.update("phone")}
              />
            </div>
            <div className="col-8">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                placeholder="description"
                value={this.state.description}
                onChange={this.update("description")}
              />
            </div>
            {this.renderErrors()}
          </div>
          <hr />
          <div className="optional-input">
            {this.handleSubheader()}
            <div className="input-container">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                placeholder="website"
                value={this.state.website}
                onChange={this.update("website")}
              />
              <label htmlFor="price_range">Price Range</label>
              <input
                type="text"
                id="price change"
                placeholder="price change"
                value={this.state.price_range}
                onChange={this.update("price_range")}
              />
              <label htmlFor="capacity">Capacity</label>
              <input
                type="text"
                id="capacity"
                placeholder="capacity"
                value={this.state.capacity}
                onChange={this.update("capacity")}
              />
              <label htmlFor="cross_street">Cross street</label>
              <input
                type="text"
                id="cross_street"
                placeholder="cross_street"
                value={this.state.cross_street}
                onChange={this.update("cross_street")}
              />
              <label htmlFor="neighborhood">Neighborhood</label>
              <input
                type="text"
                id="neighborhood"
                placeholder="neighborhood"
                value={this.state.neighborhood}
                onChange={this.update("neighborhood")}
              />
              <label htmlFor="hours_of_operation">Hours of Operation</label>
              <input
                type="text"
                id="hours_of_operation"
                placeholder="hours of operation"
                placeholder="hours_of_operation"
                value={this.state.hours_of_operation}
                onChange={this.update("hours_of_operation")}
              />
              <label htmlFor="cuisines">Cuisines</label>
              <input
                type="text"
                id="cuisines"
                placeholder="cuisines"
                value={this.state.cuisines}
                onChange={this.update("cuisines")}
              />
              <label htmlFor="dining_style">Dining Style</label>
              <input
                type="text"
                id="dining_style"
                placeholder="dining style"
                value={this.state.dining_style}
                onChange={this.update("dining_style")}
              />
              <label htmlFor="dress_code">Dress Code</label>
              <input
                type="text"
                id="dress_code"
                placeholder="dress code"
                value={this.state.dress_code}
                onChange={this.update("dress_code")}
              />
              <label htmlFor="dining_style">Parking Details</label>
              <input
                type="text"
                id="dining_style"
                placeholder="dining style"
                value={this.state.parking_details}
                onChange={this.update("parking_details")}
              />
              <label htmlFor="public_transit">Public Transit</label>
              <input
                type="text"
                id="public_transit"
                placeholder="public transit"
                value={this.state.public_transit}
                onChange={this.update("public_transit")}
              />
              <label htmlFor="payment_options">Payment Options</label>
              <input
                type="text"
                id="payment_options"
                placeholder="payment options"
                value={this.state.payment_options}
                onChange={this.update("payment_options")}
              />
              <label htmlFor="executive_chef">Executive Chef</label>
              <input
                type="text"
                id="executive_chef"
                placeholder="executive chef"
                value={this.state.executive_chef}
                onChange={this.update("executive_chef")}
              />
              <label htmlFor="additional">Additional</label>
              <input
                type="text"
                id="additional"
                placeholder="additional"
                value={this.state.additional}
                onChange={this.update("additional")}
              />
              <button className="readon">{this.props.formType}</button>
            </div>
            <div className="map-container">
              <FontAwesomeIcon icon="map" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(RestaurantForm);
