import React from "react";
import { withRouter } from "react-router-dom";

class RestaurantForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.post;
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

  render() {
    return (
      <div>
        <h3>{this.props.formType}</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.title}
            onChange={this.update("title")}
          />
          <textarea value={this.state.body} onChange={this.update("body")} />
          <input type="submit" value={this.props.formType} />
        </form>
      </div>
    );
  }
}

export default withRouter(PostForm);
