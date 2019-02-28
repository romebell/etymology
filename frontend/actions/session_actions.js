import * as SessionAPIUtils from '../utils/session_api_util';
import { Session } from 'inspector';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const LOGOUT_CURRENT_USER = "REMOVE_CURRENT_USER"

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser: currentUser
})

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
})

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors: errors
})

export const signup = user => dispatch => (
  SessionAPIUtils.signup(user).then(
    user => (dispatch(receiveCurrentUser(user))),
    err => (dispatch(receiveErrors(err.reponseJSON)))
  )
)

export const login = user => dispatch => (
  SessionAPIUtils.login(user).then(
    user => (dispatch(receiveCurrentUser(user))), 
    err => (dispatch(receiveErrors(err.reponseJSON)))
  )
)

export const logout = () => dispatch => (
  SessionAPIUtils.logout().then(dispatch(logoutCurrentUser()))
)