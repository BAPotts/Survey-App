import React from "react";
import PropTypes from "prop-types";
import { useFirestore, useFirestoreConnect, useSelector, isLoaded } from 'react-redux-firebase';


function SurveyForm(props) {

  const firestore = useFirestore();
  const {survey, onSurveySubmission} = props;

  function handleOptionChange(event){
    this.setState({
      question1: event.target.value,
      question2: event.target.value
    });
    console.log(this.state.question1, this.state.question2)
  }

  function handleSubmit(event) {
    event.preventDefault();
    
    alert(`You chose the option.`);
  }
//   function addAnswersToFirestore(event) {
//     event.preventDefault();
//     props.onSurveySubmission();
//     console.log("submission", this.state.question1);
//   }

//   return firestore.update({collection: 'surveys', doc: survey.id }, propertiesToUpdate)
// }

  //   addAnswersToFirestore = formSubmitEvent => {
  //   formSubmitEvent.preventDefault();
  //   console.log("submission", this.state.selectedOption);
  // };

  return (
    <React.Fragment>
      <h1>{survey.surveyTitle}</h1>
      <form
        onSubmit={handleSubmit}
      >
        <h3>{survey.question1}</h3>
        <label>
          <input
          type="radio"
          name="question1"
          value="q1a1count"
          checked={survey.question1 === "q1a1count"}
          onChange={handleOptionChange}/>
          {survey.question1answer1}
        </label>
        <label> 
          <input type="radio" 
          name="question1" 
          value="q1a2count" 
          checked={survey.question1 === "q1a2count"}
          onChange={handleOptionChange} />
          {survey.question1answer2}
        </label>
        <label>
          <input type="radio"
          name="question1"
          value="q1a3count"
          checked={survey.question1 === "q1a3count"}
          onChange={handleOptionChange} />
          {survey.question1answer3}
        </label> 
        <label> 
          <input type="radio" 
          name="question1" 
          value="q1a4count"
          checked={survey.question1 === "q1a4count"}
          onChange={handleOptionChange} />
          {survey.question1answer4}
        </label>  

        <h3>{survey.question2}</h3>
        <label>
          <input type="radio" 
          name="question2" 
          value="q2a1count" 
          checked={survey.question2 === "q2a1count"}
          onChange={handleOptionChange}/>
          {survey.question2answer1}
          </label>
          <label>
            <input type="radio" 
            name="question2" 
            value="q2a2count" 
            checked={survey.question2 === "q2a2count"}
            onChange={handleOptionChange}/>
            {survey.question2answer2}
          </label>
          <label>
            <input type="radio" 
            name="question2" 
            value="q2a3count"
            checked={survey.question2 === "q1a3count"}
            onChange={handleOptionChange} />
            {survey.question2answer3}
          </label>
          <label>
            <input type="radio" 
            name="question2" 
            value="q2a4count"
            checked={survey.question2 === "q2a4count"}
            onChange={handleOptionChange} />
            {survey.question2answer4}
          </label>
        <button type="submit">Submit Survey</button>
      </form>
    </React.Fragment>

    );
}

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


SurveyForm.propTypes = {
  survey: PropTypes.object,
  onSurveySubmission: PropTypes.func
}
export default SurveyForm;