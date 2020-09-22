import React from 'react';
import NewSurvey from './NewSurvey';
import SurveyList from './SurveyList';
import SurveyDetail from './SurveyDetail';
import SurveyForm from './SurveyForm';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';
import {withFirestore, isLoaded } from 'react-redux-firebase';

class SurveyControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSurvey: null
    }
  }

  handleClick = () => {
    if(this.state.selectedSurvey != null) {
      this.setState({
        selectedSurvey: null
      });
    } else {
      const {dispatch} = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewSurveyToList = () => {
    const {dispatch} = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }

  handleChangingSelectedSurvey = (id) => {
    this.props.firestore.get({collection: 'surveys', doc: id}).then((survey) => {
      const firestoreSurvey = {
        surveyTitle: survey.get("surveyTitle"),
        question1: survey.get("question1"),
        question1answer1: survey.get("question1answer1"),
        question1answer2: survey.get("question1answer2"),
        question1answer3: survey.get("question1answer3"),
        question1answer4: survey.get("question1answer4"),
        question2: survey.get("question2"),
        question2answer1: survey.get("question2answer1"),
        question2answer2: survey.get("question2answer2"),
        question2answer3: survey.get("question2answer3"),
        question2answer4: survey.get("question2answer4"),
        id: survey.id
      }
      this.setState({selectedSurvey: firestoreSurvey});
    });
  }

  handleDeletingSurvey = (id) => {
    this.props.firestore.delete({collection: 'surveys', doc: id});
    this.setState({selectedSurvey: null});
  }

  render(){
    const auth = this.props.firebase.auth();
    if(!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
        </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser == null)) {
      return (
        <React.Fragment>
          <h1>You must be signed in to access the survey list.</h1>
        </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser != null)) {
      let currentlyVisibleState = null;
      let buttonText = null;
      if (this.state.selectedSurvey != null) {
        currentlyVisibleState = 
        <SurveyDetail
          survey = {this.state.selectedSurvey}
          onClickingDelete = {this.handleDeletingSurvey}
          onClickingTakeSurvey = {this.handleTakeSurvey} />
          buttonText = "Return to Survey List";
      } else if (this.props.newSurveyVisbleOnPage) {
        currentlyVisibleState = <NewSurvey onNewSurveyCreation = {this.handleAddingNewSurveyToList} />;
        buttonText = "Return to Survey List";
      // } else if (this.props.takeSurveyVisibleOnPage) {
      //   currentlyVisibleState = <SurveyForm onTakeSurvey = {this.handleAddingSurveyAnswer} />;
      //   buttonText = "Submit Survey Answer"
      } else {
        currentlyVisibleState = <SurveyList surveyList={this.props.masterSurveyList} onSurveySelection={this.handleChangingSelectedSurvey} />;
        buttonText = "Add New Survey";
      }
      return (
        <React.Fragment>
          {currentlyVisibleState}
          <button onClick={this.handleClick}>{buttonText}</button>
        </React.Fragment>
      );
    }
  }
}

SurveyControl.propTypes = {
  masterSurveyList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterSurveyList: state.masterSurveyList,
    newSurveyVisbleOnPage: state.newSurveyVisbleOnPage
    // takeSurveyVisbleOnPage: state.takeSurveyVisibleOnPage
  }
}

SurveyControl = connect(mapStateToProps)(SurveyControl);

export default withFirestore(SurveyControl);