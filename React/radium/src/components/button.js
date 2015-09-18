import React from 'react';
import Radium from 'radium';

const styles = {
  base: {
    background: 'red',
    border: 0,
    borderRadius: 4,
    color: 'white',
    padding: '1.5em'
  }
};

// create class External
class Button extends React.Component {
  render () {
    return(
      <button style={styles.base}>{this.props.content}</button>
    );
  }
}

// require the content propType
Button.propTypes = {
  content: React.PropTypes.string.isRequired
};

module.exports = Radium(Button);
