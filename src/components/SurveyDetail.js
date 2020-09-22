import React from "react";
import PropTypes from "prop-types";

function SurveyDetail(props) {
  return (
    <React.Fragment>
      <h1>Survey Detail</h1>
      <p>Number of Survey Takers: {}</p>
      <p>Question 1 Answers: {}</p>
      <p>Question 2 Answers: {}</p>
      <button>Return to Survey List</button>
      <button>Delete Survey</button>
    </React.Fragment>
  );
}

export default SurveyDetail;