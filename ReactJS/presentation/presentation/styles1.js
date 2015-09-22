import React from 'react';

// style object
const styles = {
  borderRadius: '1rem',
  border: '1px solid red',
  fontFamily: 'sans-serif',
  fontSize: '1.3rem',
  textAlign: 'center'
};

// create class External
class Styles1 extends React.Component {
  render () {
    return(
      <div>
      <p style={styles}>{this.props.content}</p>
      </div>
    );
    }
}

// require the content propType
Styles1.propTypes = {
  content: React.PropTypes.string.isRequired
};

export default Styles1;
