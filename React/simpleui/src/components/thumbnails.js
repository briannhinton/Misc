import React from 'react';

const styles = {
  thumbs: {
    	margin: '0 auto',
    	marginTop: '60px',
    	textAlign: 'center'
  },
  link: {
    	width: '49%',
    	float: 'left',
    	position: 'relative',
    	marginRight: '2%',
    	marginTop: '2%'
  }
};

// create class External
class Thumbnails extends React.Component {
  render () {
    return(
      <section style={styles.thumbs}>
      				<a href='#' style={styles.link}>
      					{this.props.content}
      					<span>{this.props.title}</span>
      				</a>
      </section>
    );
    }
}

// require the content propType
Thumbnails.propTypes = {
  content: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired
};

export default Thumbnails;
