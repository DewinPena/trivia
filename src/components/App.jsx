import React, { Component } from 'react';
import { Question } from './Question';
import { Answer } from './Answer';
import '../css/App.css';
// import components

class App extends Component {

  render() {
    return (
      <div className="app" >
        <Question text="prop" />

      <div> 
        <Answer text="prop"/>

      </div>

      </div >
      
    );
  }
}

export default App;
