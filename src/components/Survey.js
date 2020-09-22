import React from "react";
import PropTypes from "prop-types";

function Survey(props) {
    return (
        <React.Fragment>
        <h1>Survey Title</h1>
        <p>Survey Question</p>
        <p>Survey Answer</p>
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
    whenSurveyClicked: PropTypes.func
}

export default Survey;