import React from "react";
import PropTypes from "prop-types";

function NewSurvey(props) {
  return (
    <React.Fragment>
      <form>
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
        <button type="submit">Submit Survey</button>
      </form>
    </React.Fragment>
  );
}

export default NewSurvey;