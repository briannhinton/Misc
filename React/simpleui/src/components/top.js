import React from 'react';

const styles = {
  header: {
    borderBottom: '1px solid #eeeeee',
    marginBottom: '6px'
  }
};

// create class External
class Top extends React.Component {
  render () {
    return(
      <header style={styles.header}>
  			<a href="/"><h1>{this.props.content}</h1></a>
  		</header>
    );
    }
}

// require the content propType
Top.propTypes = {
  content: React.PropTypes.string.isRequired
};

export default Top;
