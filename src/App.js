import React, { Component } from 'react';
import PlanForm from './PlanForm';
import './App.css';
import 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"><span className="branding">YoPlans</span></h1>
        </header>
        <PlanForm />
        <div id="plan"></div>
      </div>
    );
  }
}

export default App;
