import React from "react";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function NewSurvey(props) {

  const firestore = useFirestore();

  function addSurveyToFirestore(event) {
    event.preventDefault();
    props.onNewSurveyCreation();

    return firestore.collection('surveys').add(
      {
        surveyTitle: event.target.surveyTitle.value,
        question1: event.target.question1.value,
        question1answer1: event.target.question1answer1.value,
        question1answer2: event.target.question1answer2.value,
        question1answer3: event.target.question1answer3.value,
        question1answer4: event.target.question1answer4.value,
        question2: event.target.question2.value,
        question2answer1: event.target.question2answer1.value,
        question2answer2: event.target.question2answer2.value,
        question2answer3: event.target.question2answer3.value,
        question2answer4: event.target.question2answer4.value,
        q1a1count: 0,
        q1a2count: 0,
        q1a3count: 0,
        q1a4count: 0,
        q2a1count: 0,
        q2a2count: 0,
        q2a3count: 0,
        q2a4count: 0
      }
    );
  }

  return (
    <React.Fragment>
      <form onSubmit={addSurveyToFirestore}>
        <input
          type="text"
          name="surveyTitle"
          placeholder="Survey Title"
        />
        <div>
          <input
            type="text"
            name="question1"
            placeholder="Question 1"
          />
          <input
            type="text"
            name="question1answer1"
            placeholder="Answer 1"
          />
          <input
            type="text"
            name="question1answer2"
            placeholder="Answer 2"
          />
          <input
            type="text"
            name="question1answer3"
            placeholder="Answer 3"
          />
          <input
            type="text"
            name="question1answer4"
            placeholder="Answer 4"
          />
        </div>
        <div>
          <input
            type="text"
            name="question2"
            placeholder="Question 2"
          />
          <input
            type="text"
            name="question2answer1"
            placeholder="Answer 1"
          />
          <input
            type="text"
            name="question2answer2"
            placeholder="Answer 2"
          />
          <input
            type="text"
            name="question2answer3"
            placeholder="Answer 3"
          />
          <input
            type="text"
            name="question2answer4"
            placeholder="Answer 4"
          />
        </div>
        <button type="submit">Add new survey</button>
      </form>
    </React.Fragment>
  );
}

NewSurvey.propTypes = {
  onNewSurveyCreation: PropTypes.func
}

export default NewSurvey;