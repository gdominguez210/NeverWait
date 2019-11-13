import React from "react";
import { Banner } from "./Banner";
import CarouselContainer from "./carousel/carousel_container";
import LocationContainer from "./location/location_container";
import { CSSTransition } from "react-transition-group";
import { withRouter } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
class Splash extends React.Component {
  constructor(props) {
    super(props);
    debugger;
    this.state = {
      search_params: {}
    };
    this.passSearch = this.passSearch.bind(this);
    this.is_Mounted = false;
  }

  componentDidMount() {
    this.is_Mounted = true;
    debugger;
  }

  passSearch(params) {
    debugger;
    this.setState({
      search_params: params
    });
  }
  render() {
    debugger;
    return (
      <>
        <Banner passSearch={this.passSearch} />
        <section className="inner-container">
          <CarouselContainer />
          <LocationContainer
            history={this.props.history}
            params={this.state.search_params}
          />
        </section>
      </>
    );
  }
}

export default withRouter(Splash);
