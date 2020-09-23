import React from "react";
import PropTypes from "prop-types";

function SurveyDetail(props) {
  const { survey, onClickingDelete, onSurveySelection } = props;

  return (
    <React.Fragment>
      <h1>Survey Detail</h1>
      <p>Survey: {survey.surveyTitle}</p>
      <p>Number of Survey Takers: {}</p>
      <p>Question 1 Answers: {}</p>
      <p>Question 2 Answers: {}</p>
      {/* <button>Return to Survey List</button> */}
      <button onClick={()=> onClickingDelete(survey.id)}>Delete Survey</button>
      <button onClick={() => props.handleTakingSurvey(survey.id) }> Take Survey </button>
    </React.Fragment>
  );
}

SurveyDetail.propTypes = {
  survey: PropTypes.object,
  handleTakingSurvey: PropTypes.func
}

export default SurveyDetail;