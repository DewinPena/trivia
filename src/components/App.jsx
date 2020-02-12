import React, { Component } from 'react';
import { Question } from './Question';
import { Answer } from './Answer';
import { buildFirebase } from '../clients/firebase.js'
// import components

import '../css/App.css';

let database = buildFirebase();
let databaseRef = database.ref("/questions")




class App extends Component {
  state = {
    questions: []
  };
  componentDidMount() {
    databaseRef.once("value").then((data)=>{
      const questions = data.val();
      console.log(questions);
      let question_ids = Object.keys(questions);
      let array_of_questions = question_ids.map((key)=>{
          let current_question = questions[key]; //You can also write "return questions[key];" instead of line 25 and 26
          return current_question;
      });
      
      this.setState({
        questions: array_of_questions
      })
    });

  }


  render() {
    return (
      <div className="app" >
        {this.state.questions.length ? this.state.questions[0].question_text : "no questions available"}
        <Question text="prop" />

        <div>
          <Answer text="prop" />

        </div>

      </div >

    );
  }
}

export default App;
