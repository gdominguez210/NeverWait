# NeverWait

[Link to live site](http://neverwait.herokuapp.com/)
[NeverWait](http://neverwait.herokuapp.com/) is a fullstack application that is modeled after [OpenTable](https://www.opentable.com/). Neverwait utilizes React / Redux to manage the frontend and Ruby on Rails with a PostgresSQL database to store and manage data. Asset management is handled via Amazon Web Services.

---

## Main Features

- User account creation, and login
- Users can create/update/delete restaurants/reviews on the website.
- Users can make reservations for restaurants on the website.

- A Restaurant show page has a stat breakdown with various information such as:

  - Total average of all reviews on the restaurant
  - Amount of total reviews
  - Amount of ratings of each type (1-5)
  - Percent of reviews that recommend the restuarant

- The reservation form first prompts the user for a date and time for their reservation.
  Before prompting the user for more information, the form validates that there is an opening at the requested time. If the validattion succeeds, the form redirects to a landing page with an additional form that prompts the user for more information about their reservation, ie. first name, last name, email, etc. This landing page, prefills the information submitted from the previous form.
