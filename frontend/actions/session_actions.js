import * as SessionAPIUtil from '../utils/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const LOGOUT_CURRENT_USER = "REMOVE_CURRENT_USER"

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user: user
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
    user => {
    dispatch(receiveCurrentUser(user))
  }, err => {
    dispatch(receiveErrors(err.responseJSON))
  })
)


// export const signup = formUser => dispatch => (
//   SessionAPIUtil.signup(user).then(user => {
//     dispatch(receiveCurrentUser(user))
//   })
// )

// SessionAPIUtil.signup(user).then(
//   user => (dispatch(receiveCurrentUser(user))),
//   err => (dispatch(receiveErrors(err.reponseJSON)))
// )


// export const login = user => dispatch => (
//   SessionAPIUtil.login(user).then(
//     user => (dispatch(receiveCurrentUser(user))), 
//     err => (dispatch(receiveErrors(err.reponseJSON)))
//   )
// )

export const logout = () => dispatch => (
  SessionAPIUtil.deleteSession().then(dispatch(logoutCurrentUser()))
)