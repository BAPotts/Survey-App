import React from "react";
import PropTypes from "prop-types";
import { useFirestore, useFirestoreConnect, isLoaded } from 'react-redux-firebase';


function SurveyForm(props) {

  const firestore = useFirestore();

  function addSurveyResultsToFirestore(event) {
    event.preventDefault();
    props.onSurveySubmission();

    return firestore.collection('surveys').add(
      {
        surveyTitle: event.target.surveyTitle.value,
        question1: event.target.question1.value,
        question1answer1: event.target.question1response.value,
        question2: event.target.question2.value,
        question2answer1: event.target.question2response.value,
      }
    );
  }

//   useFirestoreConnect([
//     { collection: 'Surveys' }
//   ]);

//   const surveys = useSelector(state => state.firestore.ordered.surveys);

//   if (isLoaded(surveys)){
//     return (
//       <React.Fragment>
//         <h1>[SurveyName]</h1>
//           <form>
//             <input type="radio" name="Question1" value="Q1A1" />
//             <input type="radio" name="Question1" value="Q1A2" />
//             <input type="radio" name="Question1" value="Q1A3" />
//             <input type="radio" name="Question1" value="Q1A4" />

//             <input type="radio" name="Question2" value="Q2A1" />
//             <input type="radio" name="Question2" value="Q2A2" />
//             <input type="radio" name="Question2" value="Q3A3" />
//             <input type="radio" name="Question2" value="Q3A4" />
//           </form>
//       </React.Fragment>
//     );
//   } else {
//     return (
//       <React.Fragment>
//         <h3>Loading...</h3>
//       </React.Fragment>
//     )
//   }
}

export default SurveyForm;

// | Key | Surveyname | question1 | question1answer1 | question1answer2 | ... |
// | Key | Surveyname | answerToQuestion1 | answerToQuestion2 | answerToQuestion3 | answerToQuestion4 |