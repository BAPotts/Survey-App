import React from "react";
import PropTypes from "prop-types";
import { useFirestore, useFirestoreConnect, useSelector, isLoaded } from 'react-redux-firebase';


function SurveyForm(props) {

  const firestore = useFirestore();
  const {survey, onSurveySubmission} = props;

  return (
    <React.Fragment>
      <h1>{survey.surveyTitle}</h1>
      <form>
        <h3>{survey.question1}</h3>
        <label>
          <input type="radio" name="Question1" value={survey.question1answer1} />
          {survey.question1answer1}
        </label>
        <label> 
          <input type="radio" name="Question1" value="Q1A2" />
          {survey.question1answer2}
        </label>
        <label>
          <input type="radio" name="Question1" value="Q1A3" /> 
          {survey.question1answer3}
        </label> 
        <label> 
          <input type="radio" name="Question1" value="Q1A4" />
          {survey.question1answer4}
        </label>  

        <h3>{survey.question2}</h3>
        <label>
          <input type="radio" name="Question2" value="Q2A1" />
          {survey.question2answer1}
          </label>
          <label>
            <input type="radio" name="Question2" value="Q2A2" />
            {survey.question2answer2}
          </label>
          <label>
            <input type="radio" name="Question2" value="Q3A3" />
            {survey.question2answer3}
          </label>
          <label>
            <input type="radio" name="Question2" value="Q3A4" />
            {survey.question2answer4}
          </label>
      </form>
    </React.Fragment>

    );

  // function addSurveyToFirestore(event) {
  //   event.preventDefault();
  //   props.onSurveySubmission();

  //   return firestore.collection('surveys').add(
  //     {
  //       surveyTitle: event.target.surveyTitle.value,
  //       question1: event.target.question1.value,
  //       question1answer1: event.target.question1response.value,
  //       question2: event.target.question2.value,
  //       question2answer1: event.target.question2response.value,
  //     }
  //   );
  // }

  // useFirestoreConnect([
  //   { collection: 'Surveys' }
  // ]);

  // const surveys = useSelector(state => state.firestore.ordered.surveys);

  // if (isLoaded(surveys)){
  //   return (
  //     <React.Fragment>
  //       <h1>[SurveyName]</h1>
  //         <form onSubmit=
  //           <input type="radio" name="Question1" value="Q1A1" />
  //           <input type="radio" name="Question1" value="Q1A2" />
  //           <input type="radio" name="Question1" value="Q1A3" />
  //           <input type="radio" name="Question1" value="Q1A4" />

  //           <input type="radio" name="Question2" value="Q2A1" />
  //           <input type="radio" name="Question2" value="Q2A2" />
  //           <input type="radio" name="Question2" value="Q3A3" />
  //           <input type="radio" name="Question2" value="Q3A4" />
  //         </form>
  //     </React.Fragment>
  //   );
  // } else {
  //   return (
  //     <React.Fragment>
  //       <h3>Loading...</h3>
  //     </React.Fragment>
  //   )
  // }
}

SurveyForm.propTypes = {
  survey: PropTypes.object,
  onSurveySubmission: PropTypes.func
}
export default SurveyForm;

