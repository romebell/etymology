import * as SessionAPIUtil from '../utils/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const LOGOUT_CURRENT_USER = "REMOVE_CURRENT_USER"

const receiveCurrentUser = payload => ({
  type: RECEIVE_CURRENT_USER,
  payload: payload
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors: errors
});

export const signup = formUser => dispatch => (
  SessionAPIUtil.postUser(formUser).then(
    user => {
    dispatch(receiveCurrentUser(user))
  }, err => {
    dispatch(receiveErrors(err.responseJSON))
  })
)

export const login = user => dispatch => (
  SessionAPIUtil.postSession(user).then(
    payload => {
    dispatch(receiveCurrentUser(payload))
  }, err => {
    dispatch(receiveErrors(err.responseJSON))
  })
)

export const logout = () => dispatch => (
  SessionAPIUtil.deleteSession().then(dispatch(logoutCurrentUser()))
)