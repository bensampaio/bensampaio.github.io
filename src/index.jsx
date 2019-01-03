import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFile, faGraduationCap, faCode, faInfoCircle, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithubSquare, faGooglePlusSquare, faFacebookSquare, faHtml5, faCss3, faWindows, faLinux } from '@fortawesome/free-brands-svg-icons';

import App from './components/App';

const rootElement = document.getElementById('app-root');

library.add(
    faChevronDown,
    faChevronUp,
    faCss3,
    faCode,
    faFacebookSquare,
    faFile,
    faGithubSquare,
    faGooglePlusSquare,
    faGraduationCap,
    faHtml5,
    faInfoCircle,
    faLinkedin,
    faLinux,
    faWindows,
);

ReactDOM.render(<App />, rootElement);
