import React from "react";
import { connect } from "react-redux";

const SurveyFormReview = ({ onCancel }) => {
    return (
        <div>
            <h1>Review!</h1>
            <button
                className="yellow darken-3 btn-flat"
                onClick={onCancel}
            >
                Back
            </button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        formValues: state.form.surveyForm.values
    }
}

export default connect(mapStateToProps)(SurveyFormReview);