import React from "react";
import { Header } from "./Header";
import { Banner } from "./Banner";
import { Route, Link } from "react-router-dom";
import { closeModal } from "../actions/modal_actions";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import ModalContainer from "./modal/modal_container";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, fab } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from "react-transition-group";
import { Footer } from "./Footer";
import RestaurantIndexContainer from "./restaurant/restaurant_index_container";
import RestaurantFeaturedContainer from "./restaurant//restaurant_featured/restaurant_featured_container";
import RestaurantShowContainer from "./restaurant/restaurant_show/restaurant_show_container";
import CreateRestaurantForm from "./restaurant/restaurant_forms/create_form_container";
import EditRestaurantForm from "./restaurant/restaurant_forms/edit_form_container";
import CreateReservationForm from "./reservation/reservation_form_container";
import ReservationIndexContainer from "./reservation/reservation_index_container";
import FavoritesIndexContainer from "./favorite/favorite_index_container";
import CarouselContainer from "./carousel/carousel_container";
import Location from "./location/location";
import RestaurantSearchContainer from "./restaurant/restaurant_search/restaurant_search_container";
// import RestaurantIndexContainer from './restaurant/restaurant_index_container';
const App = props => {
  library.add(fas);
  return (
    <>
      <ModalContainer />
      <Header />
      <Route exact path="/" component={Banner} />

      <section className="inner-container">
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
        <ProtectedRoute
          exact
          path="/new-reservation"
          component={CreateReservationForm}
        />

        {/* <Route exact path="/" component={RestaurantFeaturedContainer} /> */}
        <Route exact path="/" component={CarouselContainer} />
        <Route exact path="/" component={Location} />
        <Route exact path="/restaurants" component={RestaurantIndexContainer} />
        <Route
          exact
          path="/search-restaurants"
          component={RestaurantSearchContainer}
        />
        <Route
          exact
          path="/search/:query"
          component={RestaurantIndexContainer}
        />
        <Route
          exact
          path="/users/:userId/reservations"
          component={ReservationIndexContainer}
        ></Route>
        <Route
          exact
          path="/users/:userId/favorites"
          component={FavoritesIndexContainer}
        ></Route>
      </section>
      <Route
        exact
        path="/restaurants/:restaurantId"
        component={RestaurantShowContainer}
      ></Route>

      <Footer />
    </>
  );
};
export default App;
