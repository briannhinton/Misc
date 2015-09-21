import React from 'react';
import styles from './styles';

// create class External
class External extends React.Component {
  render () {
    return(
      <div>
      <p style={styles.announcement}>{this.props.content}</p>
      </div>
    );
    }
}

// require the content propType
External.propTypes = {
  content: React.PropTypes.string.isRequired
};

export default External;
