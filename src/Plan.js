import React, { Component } from 'react';

class Plan extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.plan.name}:</h3>
        <p>"{this.props.plan.title}"</p>
      </div>
    )
  }
}

export default Plan;