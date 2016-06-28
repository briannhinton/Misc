import React from 'react';
import ReactDOM from 'react-dom';

// import external object
import External from './components/external';

// render react content to index.html file at <div id="app"/>
React.render(<External content='SVG Sprites' />,
document.getElementById('app'));
