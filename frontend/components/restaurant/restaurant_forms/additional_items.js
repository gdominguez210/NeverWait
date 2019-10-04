import React from "react";

const AdditionalItems = props => {
  return (
    <>
      <input
        type="text"
        value={this.state.website}
        onChange={props.update("website")}
      />
      <input
        type="text"
        value={this.state.price_range}
        onChange={props.update("price_range")}
      />
      <input
        type="text"
        value={this.state.capacity}
        onChange={props.update("capacity")}
      />
      <input
        type="text"
        value={this.state.cross_street}
        onChange={props.update("cross_street")}
      />
      <input
        type="text"
        value={this.state.title}
        onChange={this.update("neighborhood")}
      />
      <input
        type="text"
        value={this.state.title}
        onChange={this.update("hours_of_operation")}
      />
      <input
        type="text"
        value={this.state.title}
        onChange={this.update("cuisines")}
      />
      <input
        type="text"
        value={this.state.title}
        onChange={this.update("dining_style")}
      />
      <input
        type="text"
        value={this.state.title}
        onChange={this.update("dress_code")}
      />
      <input
        type="text"
        value={this.state.title}
        onChange={this.update("parking_details")}
      />
      <input
        type="text"
        value={this.state.title}
        onChange={this.update("public_transit")}
      />
      <input
        type="text"
        value={this.state.title}
        onChange={this.update("payment_options")}
      />
      <input
        type="text"
        value={this.state.title}
        onChange={this.update("executive_chef")}
      />
      <input
        type="text"
        value={this.state.title}
        onChange={this.update("additional")}
      />
    </>
  );
};

export default AdditionalItems;
