import React from 'react';
import Radium from 'radium';

const styles = {
  base: {
    background: 'blue',
    border: 0,
    borderRadius: 4,
    color: 'white',
    padding: '1.5em',

    ':hover': {
      backgroundColor: 'red'
    },

    ':focus': {
      backgroundColor: 'green'
    },

    ':active': {
      backgroundColor: 'yellow',
      color: 'black'
    }
  }
};

// create class External
class Button extends React.Component {
  render () {
    return (
      <div>
      <button style={styles.base}>
        {this.props.content}
      </button>
      </div>
    );
  }
}

// require the content propType
Button.propTypes = {
  content: React.PropTypes.string.isRequired
};

module.exports = Radium(Button);
