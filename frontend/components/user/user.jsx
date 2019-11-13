import React, { createRef } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

class UserShow extends React.Component {
  constructor(props) {
    super(props);
      ;
  }

  render() {
    const { currentUser } = this.props;
    const first_name = currentUser.fname;
    const last_name = currentUser.lname;
    const initials = first_name.slice(0, 1) + last_name.slice(0, 1);

    return (
      <section className="inner-container">
        <section className="user-profile-container">
          <aside>
            <div className="user-avatar">{initials}</div>
          </aside>
          <section className="user-profile-info">
            <div className="user-login-info">
              <p>Username:</p>
              <p>{currentUser.username}</p>
            </div>
            <div className="user-name">
              <div className="user-first-name">
                <p>First Name:</p>
                <p>{first_name}</p>
              </div>
              <div className="user-last-name">
                <p>Last Name:</p>
                <p>{last_name}</p>
              </div>
            </div>
            <div className="user-stats">
              <p>Number of Reviews: {currentUser.review_ids.length}</p>
              <p>
                Number of Reservations: {currentUser.reservation_ids.length}
              </p>
              <p>Number of Favorites: {currentUser.favorite_ids.length}</p>
            </div>
          </section>
        </section>
      </section>
    );
  }
}

export default UserShow;
