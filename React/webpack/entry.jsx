import React from 'react';
import TestComponent from './testComponent.jsx';

require('./style.css');

React.render(<TestComponent name="test param" />, document.getElementById('app'));
