import { RECEIVE_WEBSITES, RECEIVE_WEBSITE, RECEIVE_VOTE } from "../actions/website_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_WEBSITES:
      // const websites = {};
      // action.websites.map(website => {
      //   websites[website.id] = website;
      // });
      return action.websites;
    case RECEIVE_WEBSITE:
      debugger
      return Object.assign({}, state, { [action.website.id]: action.website });
    default:
      return state;
  }
}
