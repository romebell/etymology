import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const _nullSession = Object.freeze({
  currentUser: null
})

const sessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newState[action.currentUser] = action.user;
      return newState;
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return state;
  }
};

export default sessionReducer;