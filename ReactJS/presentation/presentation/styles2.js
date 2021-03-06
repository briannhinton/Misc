import React from 'react';

// define variables
const baseRadius = '.5rem';
const primaryColor = 'blue';

// style object
const styles = {
  announcement: {
    borderRadius: baseRadius,
    border: `1px solid ${primaryColor}`,
    fontFamily: 'sans-serif',
    fontSize: '1.3rem',
    textAlign: 'center'
  }
};

// create class External
class Styles2 extends React.Component {
  render () {
    return(
      <div>
      <p style={styles.announcement}>{this.props.content}</p>
      </div>
    );
    }
}

// require the content propType
Styles2.propTypes = {
  content: React.PropTypes.string.isRequired
};

export default Styles2;
