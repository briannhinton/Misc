import React from 'react';

const styles = {
  feet: {
  boxShadow: 'inset 0 1px 0 #eee',
  	padding: '40px 0 0 0',
  	marginTop: '100px',
  	position: 'relative'
  },
  paragraph: {
  	float: 'left'
  }
};

// create class External
class Bottom extends React.Component {
  render () {
    return(
      <footer style={styles.feet}>
      				<p style={styles.paragraph}>
                {this.props.content}
      				</p>
      </footer>
    );
    }
}

// require the content propType
Bottom.propTypes = {
  content: React.PropTypes.string.isRequired
};

export default Bottom;
