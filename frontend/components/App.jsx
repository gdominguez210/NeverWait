import React from "react";
import { Header } from "./Header";
import { Banner } from "./Banner";
import { Route, Link } from "react-router-dom";
import { closeModal } from "../actions/modal_actions";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Modal from "./modal/modal";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from "react-transition-group";
import RestaurantIndexContainer from "./restaurant/restaurant_index_container";
import RestaurantFeaturedContainer from "./restaurant/restaurant_featured_container";
import RestaurantShowContainer from "./restaurant/restaurant_show/restaurant_show_container";
import CreateRestaurantForm from "./restaurant/restaurant_forms/create_form_container";
import EditRestaurantForm from "./restaurant/restaurant_forms/edit_form_container";
// import RestaurantIndexContainer from './restaurant/restaurant_index_container';
const App = props => {
  debugger;
  library.add(fas);

  return (
    <>
      <Modal />
      <Header />
      <Route exact path="/" component={Banner} />

      <section class="inner-container">
        <ProtectedRoute
          exact
          path="/new-restaurant"
          component={CreateRestaurantForm}
        />
        <ProtectedRoute
          exact
          path="/restaurants/:restaurantId/edit"
          component={EditRestaurantForm}
        />

        <Route exact path="/" component={RestaurantFeaturedContainer} />
        <Route exact path="/restaurants" component={RestaurantIndexContainer} />
      </section>
      <Route
        exact
        path="/restaurants/:restaurantId"
        component={RestaurantShowContainer}
      ></Route>
    </>
  );
};
export default App;
