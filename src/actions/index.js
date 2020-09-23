import * as c from './ActionTypes';

export const deleteSURVEY = id => ({
  type: c.DELETE_SURVEY,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const toggleTakingSurvey = () => ({
  type: c.TOGGLE_TAKING_SURVEY
});