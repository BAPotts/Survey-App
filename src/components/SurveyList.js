import React from "react";
import Survey from "./Survey";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

function SurveyList(props) {
  useFirestoreConnect([
    {collection: 'surveys'}
  ]);

  const surveys = useSelector(state => state.firestore.ordered.surveys);

  return (
    <React.Fragment>
      <h1>Survey List</h1>
      {surveys.map((survey) => {
        return <Survey 
          whenSurveyClicked = {props.onSurveySelection}
          surveyTitle = {survey.surveyTitle} />
      })}
  </React.Fragment>
  );
}

SurveyList.propTypes = {
  onSurveySelection: PropTypes.func
};

export default SurveyList;
