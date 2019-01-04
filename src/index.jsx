import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import App from './layout/App';

const rootElement = document.getElementById('app-root');

library.add(fab, fas);

ReactDOM.render(<App />, rootElement);
