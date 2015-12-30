import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';

// uncomment next line to enable the dev-tools.
require('mobservable-react-devtools');

import AppView from './components/app-view';

ReactDOM.render(<AppView />, document.getElementById('root'));
