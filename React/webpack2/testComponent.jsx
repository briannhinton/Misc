import React from 'react';

export default React.createClass({
  render() {
    return (
      <div>
        <h2>My test Component - param: {this.props.name}</h2>
      </div>
    );
  }
});
