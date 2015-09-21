import React from 'react';
// import external object
import Top from './src/components/top';
import Thumbnails from './src/components/thumbnails';
import Bottom from './src/components/bottom';

// render react content to index.html file at <div id="app"/>
React.render(
  <top content="Logo" />,
document.getElementById('app'));
