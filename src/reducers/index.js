import formVisibleReducer from './form-visible-reducer';
import surveyListReducer from './survey-list-reducer';
import takingSurveyReducer from './taking-survey-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  newSurveyVisbleOnPage: formVisibleReducer,
  masterSurveyList: surveyListReducer,
  surveyFormVisibleOnPage: takingSurveyReducer,
  firestore: firestoreReducer
});

export default rootReducer;