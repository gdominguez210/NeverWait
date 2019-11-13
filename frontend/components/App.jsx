import React from "react";
import { Header } from "./Header";
import { Banner } from "./Banner";
import Splash from "./Splash";
import { Route, Link } from "react-router-dom";
import { closeModal } from "../actions/modal_actions";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import ScrollToTop from "../util/scroll_to_top";
import ModalContainer from "./modal/modal_container";
import ErrorBoundary from "./ErrorBoundary";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, fab } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from "react-transition-group";
import { Footer } from "./Footer";
import RestaurantIndexContainer from "./restaurant/restaurant_index_container";
import RestaurantFeaturedContainer from "./restaurant//restaurant_featured/restaurant_featured_container";
import RestaurantShowContainer from "./restaurant/restaurant_show/restaurant_show_container";
import RestaurantSearchContainer from "./restaurant/restaurant_search/restaurant_search_container";
import CreateRestaurantForm from "./restaurant/restaurant_forms/create_form_container";
import EditRestaurantForm from "./restaurant/restaurant_forms/edit_form_container";
import CreateReservationForm from "./reservation/reservation_form_container";
import ReservationIndexContainer from "./reservation/reservation_index_container";
import FavoritesIndexContainer from "./favorite/favorite_index_container";
import UserShowContainer from "./user/user_container";
// import RestaurantIndexContainer from './restaurant/restaurant_index_container';
const App = props => {
  library.add(fas);
  return (
    <>
      <ErrorBoundary>
        <ModalContainer />
        <Header />
        {/* <Route exact path="/" component={Banner} /> */}

        {/* <section className="inner-container"> */}
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
        <ErrorBoundary>
          <Route exact path="/" component={Splash} />
        </ErrorBoundary>
        {/* <Route exact path="/" component={CarouselContainer} />
        <Route exact path="/" component={Location} /> */}
        <Route exact path="/restaurants" component={RestaurantIndexContainer} />
        <ScrollToTop>
          <Route
            exact
            path="/search-restaurants"
            component={RestaurantSearchContainer}
          />
        </ScrollToTop>
        {/* <Route exact path="/search/:query" component={RestaurantIndexContainer} /> */}
        <ProtectedRoute
          exact
          path="/users/:userId/reservations"
          component={ReservationIndexContainer}
        />
        <ProtectedRoute
          exact
          path="/users/:userId/favorites"
          component={FavoritesIndexContainer}
        />
        <ProtectedRoute
          exact
          path="/users/:userId"
          component={UserShowContainer}
        />
        {/* </section> */}
        <Route
          exact
          path="/restaurants/:restaurantId"
          component={RestaurantShowContainer}
        ></Route>

        <Footer />
      </ErrorBoundary>
    </>
  );
};
export default App;
