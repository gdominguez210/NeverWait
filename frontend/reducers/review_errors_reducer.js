import { RECEIVE_REVIEW_ERRORS } from "../actions/review_actions";
import { OPEN_MODAL } from "../actions/modal_actions";
export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REVIEW_ERRORS:
      return action.errors;
    case OPEN_MODAL:
      return [];
    default:
      return state;
  }
};
