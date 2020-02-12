import React, { Component } from 'react';
// import components


class Answer extends Component {

    render() {
        return (
            <div>
                {/* Add your QuestionText, Reset Button and AnswerButtons here.  */}
                {this.props.text}
            </div>
        );
    }
}

export { Answer };