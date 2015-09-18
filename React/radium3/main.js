import React from 'react';
import Radium from 'radium';

// import external object
import Button from './src/components/button';

// render react content to index.html file at <div id="app"/>
React.render(<Button content='hello worlds' />,
document.getElementById('app'));
