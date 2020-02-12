import React, { Component } from 'react';
// import components


class Question extends Component {

  render() {
    return (
      <div>
        {/* Add your QuestionText, Reset Button and AnswerButtons here.  */}
        {this.props.text}
      </div>
    );
  }
}

export { Question };