import React from 'react';
import Radium from 'radium';

const styles = {
  both: {
    background: 'blue',
    border: 0,
    borderRadius: 4,
    color: 'white',
    padding: '1.5em',
    margin: '5em'
  },
  one: {
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
  },
  two: {
    ':hover': {
      backgroundColor: 'orange'
    },

    ':focus': {
      backgroundColor: 'teal'
    },

    ':active': {
      backgroundColor: 'purple',
      color: 'black'
    }
  }
};

// create class External
class Button extends React.Component {
  render () {
    return (
      <div>
      <button key="one"
          style={[styles.both, styles.one]}
      > Hello One!
      </button>
      <button key="two"
          style={[styles.both, styles.two]}
      > Hello Two!
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
