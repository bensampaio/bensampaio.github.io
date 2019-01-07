import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faBars,
    faBug,
    faChevronDown,
    faCode,
    faChevronUp,
    faFile,
    faGraduationCap,
    faInfoCircle,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { faCopyright, faFrownOpen } from '@fortawesome/free-regular-svg-icons';
import {
    faAngular,
    faApple,
    faCss3,
    faFacebookSquare,
    faGithubSquare,
    faGooglePlusSquare,
    faGrunt,
    faGulp,
    faHtml5,
    faJava,
    faJs,
    faLinkedin,
    faLinux,
    faNodeJs,
    faPhp,
    faReact,
    faSass,
    faWindows,
} from '@fortawesome/free-brands-svg-icons';

import App from './layout/App';

const rootElement = document.getElementById('app-root');

library.add(
    faAngular,
    faApple,
    faBars,
    faBug,
    faChevronDown,
    faChevronUp,
    faCode,
    faCopyright,
    faCss3,
    faFacebookSquare,
    faFile,
    faFrownOpen,
    faGithubSquare,
    faGooglePlusSquare,
    faGraduationCap,
    faGrunt,
    faGulp,
    faHtml5,
    faInfoCircle,
    faJava,
    faJs,
    faLinkedin,
    faLinux,
    faNodeJs,
    faPhp,
    faReact,
    faSass,
    faSpinner,
    faWindows,
);

ReactDOM.render(
    <BrowserRouter>
        <Route component={App} />
    </BrowserRouter>
, rootElement);
