import React from 'react';
// import external object
import External from './src/components/external';

// render react content to index.html file at <div id="app"/>
React.render(<External content='hello worlds' />,
document.getElementById('app'));
