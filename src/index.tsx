import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router';
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
    faTwitterSquare,
    faWindows,
} from '@fortawesome/free-brands-svg-icons';

import App from './layout/App';

const container = document.getElementById('app-root');

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
    faTwitterSquare,
    faWindows
);

if (container instanceof HTMLElement) {
    const root = createRoot(container);

    root.render(
        <StrictMode>
            <HashRouter>
                <App />
            </HashRouter>
        </StrictMode>
    );
}
