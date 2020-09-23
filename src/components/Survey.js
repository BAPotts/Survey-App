import React from "react";
import PropTypes from "prop-types";

function Survey(props) {

    return (
        <React.Fragment>
        <div>
        {/* <div onClick = {() => props.whenSurveyClicked(props.id)}> */}
            <h1>Survey Title: {props.surveyTitle}</h1>
            <p>Survey Question 1: {props.question1}</p>
            <p>Survey Answer</p>
            {/* <button onClick={() => props.onSurveySelection(survey.id) }> Take Survey </button> */}
            <button onClick = { () => props.whenSurveyDetailButtonClicked(props.id) }>Survey Details</button>
            <button onClick = { () => props.whenTakeSurveyButtonClicked(props.id)}>Take Survey</button>
        </div>
        
        </React.Fragment>
    );
}

Survey.propTypes = {
    surveyTitle: PropTypes.string,
    question1: PropTypes.string,
    question1answer1: PropTypes.string,
    question1answer2: PropTypes.string,
    question1answer3: PropTypes.string,
    question1answer4: PropTypes.string,
    question2: PropTypes.string,
    question2answer1: PropTypes.string,
    question2answer2: PropTypes.string,
    question2answer3: PropTypes.string,
    question2answer4: PropTypes.string,
    id: PropTypes.string,
    onSurveyClicked: PropTypes.func
}

export default Survey;