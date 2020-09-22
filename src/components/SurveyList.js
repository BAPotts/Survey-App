import React from "react";
import Survey from "./Survey";
import PropTypes from "prop-types";

function SurveyList(props) {
    return (
        <React.Fragment>
            <h1>Survey List</h1>
            <p>Survey Name</p>
            <Survey>
                
            </Survey>
      
    </React.Fragment>
    );
}

SurveyList.propTypes = {
  onSurveySelection: PropTypes.func
};

export default SurveyList;
