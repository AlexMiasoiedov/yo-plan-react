import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Plan from './Plan';

class PlanForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plan: {
        name: '',
        title: ''
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let newPlan = Object.assign({}, this.state.plan);
    let name = event.target.name;
    newPlan[name] = event.target.value;
    this.setState({plan: newPlan});
  }

  handleSubmit(event) {
    ReactDOM.render(<Plan plan={this.state.plan} />, document.getElementById('plan'));
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>
          Plan:
          <input name="title" type="text-area" value={this.state.title} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default PlanForm;
