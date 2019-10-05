import React from "react";
import { withRouter } from "react-router-dom";
import AdditionalItems from "./additional_items";

class RestaurantForm extends React.Component {
  constructor(props) {
    super(props);
    debugger;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { restaurant: this.props.restaurant, additionalInfo: false };
    this.update = this.update.bind(this);
    this.addAdditionalInfo = this.addAdditionalInfo.bind(this);
    this.handleAdditionalInfo = this.handleAdditionalInfo.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(() => this.props.history.push("/"));
  }

  addAdditionalInfo() {
    this.setState({
      additionalInfo: true
    });
    return <AdditionalItems update={this.update} />;
  }
  handleAdditionalInfo() {
    debugger;
    if (
      !(
        this.props.formType === "Edit Restaurant" ||
        this.props.formType === "Create Restaurant"
      )
    ) {
      return null;
    }
    // if (this.props.formType === "Create" && this.state.additionalInfo)
    if (
      this.props.formType === "Create Restaurant" &&
      this.state.additionalInfo
    ) {
      debugger;
      return (
        <button onclick={this.addAdditionalInfo}>Add Additional Info</button>
      );
    } else {
      debugger;
      return <AdditionalItems update={this.update} />;
    }
  }
  render() {
    return (
      <div class="restaurant-form-container">
        <h3>{this.props.formType}</h3>
        <form className="restaurant-form" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Name *"
            value={this.state.title}
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
          <label htmlFor="address">Description</label>
          <textarea
            id="description"
            placeholder="description"
            value={this.state.description}
            onChange={this.update("description")}
          />
          {this.handleAdditionalInfo()}
          <button className="readon">{this.props.formType}</button>
        </form>
      </div>
    );
  }
}

export default withRouter(RestaurantForm);
