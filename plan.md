-dispatch different action, depending on whether payload has available_timeslots
-restaurant reducer will listen to specific action that contains available_timeslots and a receivedTimeslot flag
-reducer will merge available_timeslots and receivedTimeslot flag into it's state
-by default, the restaurant will have receivedTimeslot to a falsey value and available_timeslots set to an empty string/array,
after receiving the action, it will update the receivedTimeslot to a truthy value, and have times in an array of strings.
-in the reservation form component, we will pass the restaurant we're looking at, as props
-in the reservation form component, we will have a function that renders the buttons for the timeslots.
by default this component will return null, but if in the restaurant prop, if the receivedTimeslot flag is set to a truthy value, we will map over the available_timeslots array of times, and create the html for the buttons
-each button will have an event listener for onClick, that updates the state of the form's start_time based on the value(time string) of the button
