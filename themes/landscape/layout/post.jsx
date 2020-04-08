import React from 'react';

export default class extends React.Component {
  render() {
    return (
      <div>
        <h3>POST: {this.props.page.title}</h3>
        <div>{this.props.page.date.toString()}</div>
      </div>
    )
  }
}