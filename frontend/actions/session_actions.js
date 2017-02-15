import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const signup = (user) => dispatch => {
  return SessionApiUtil.signup(user).then(
    (user) => (dispatch(receiveCurrentUser(user))),
    (errors) => (dispatch(receiveErrors(errors.responseJSON)))
  );
};

export const login = user => dispatch => (
  SessionApiUtil.login(user).then(
    (user) => (dispatch(receiveCurrentUser(user))),
    (errors) => (dispatch(receiveErrors(errors.responseJSON)))
  )
);

export const logout = () => dispatch => {
  return SessionApiUtil.logout().then((user) => (
    dispatch(receiveCurrentUser(null))
  ));
};
