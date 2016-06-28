import React from 'react';
import ReactDOM from 'react-dom';

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
        <svg className="iconContainer">
          <use xlinkHref='/#icon-chrome' />
        </svg>
        <svg className="iconContainer">
          <use xlinkHref='#icon-safari' />
        </svg>
        <svg className="iconContainer">
          <use xlinkHref='#icon-ie' />
        </svg>
        <svg className="iconContainer">
          <use xlinkHref='#icon-firefox' />
        </svg>
        <svg className="iconContainer">
          <use xlinkHref='#icon-rocket' />
        </svg>
      </div>
    );
    }
}

// require the content propType
External.propTypes = {
  content: React.PropTypes.string.isRequired
};

export default External;
