import React from "react";
import Survey from "./Survey";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

function SurveyList(props) {
  const { survey, onSurveySelection } = props;
  useFirestoreConnect([
    { collection: 'surveys' }
  ]);

  const surveys = useSelector(state => state.firestore.ordered.surveys);
  
  if (isLoaded(surveys)) {
    return (
      <React.Fragment>
        <h1>Survey List</h1>
        {surveys.map((survey) => {
          return <Survey
            whenSurveyDetailButtonClicked = {props.onSurveySelection}
            // whenSurveyClicked = {props.onSurveySelection}
            surveyTitle = {survey.surveyTitle}
            question1 = {survey.question1}
            question1answer1 = {survey.question1answer1}
            question1answer2 = {survey.question1answer2}
            question1answer3 = {survey.question1answer3}
            question1answer4 = {survey.question1answer4} 
            question2 = {survey.question2}
            question2answer1 = {survey.question2answer1}
            question2answer2 = {survey.question2answer2}
            question2answer3 = {survey.question2answer3}
            question2answer4 = {survey.question2answer4}
            id = {survey.id}/>
            
            // <div>
            //    <button onClick={() => props.onSurveySelection(survey.id) }> Take Survey </button>
            // </div>
           
        })}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading ...</h3>
      </React.Fragment>
    )
  }
}

SurveyList.propTypes = {
  onSurveySelection: PropTypes.func
};

export default SurveyList;
