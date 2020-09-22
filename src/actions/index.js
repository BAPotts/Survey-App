import * as c from './ActionTypes';

export const deleteSURVEY = id => ({
  type: c.DELETE_SURVEY,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});