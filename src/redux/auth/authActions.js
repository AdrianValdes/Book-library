//here the action creators
import authTypes from './authTypes';

// An example of a function that sets the current user

export const setCurrentUser = (user) => {
  //set the passed user here

  return {
    type: authTypes.SET_CURRENT_USER,
    payload: user,
  };
};

export const clearCurrentUser = () => {
  return { type: authTypes.CLEAR_CURRENT_USER };
};
