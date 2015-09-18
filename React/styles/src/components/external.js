import React from 'react';

// style object
const styles = {
  borderRadius: '1rem',
  border: '1px solid green',
  fontFamily: 'sans-serif',
  fontSize: '1.3rem',
  textAlign: 'center'
};

// create class External
class External extends React.Component {
  render () {
    return(
      <div>
      <p style={styles}>{this.props.content}</p>
      </div>
    );
    }
}

// require the content propType
External.propTypes = {
  content: React.PropTypes.string.isRequired
};

export default External;
