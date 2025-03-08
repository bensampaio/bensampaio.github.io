import './_app.scss';

import cn from 'classnames';
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
import { AppProps } from 'next/app';

import Menu from '../src/layout/Menu/Menu';
import ErrorScreen from '../src/screens/ErrorScreen/ErrorScreen';
import ErrorBoundary from '../src/shared/ErrorBoundary';

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

const App = ({ Component }: AppProps) => (
    <ErrorBoundary fallback={ErrorScreen}>
        <Menu />
        <main className={cn('min-h-screen', 'mt-3xl', 'p-sm')}>
            <Component />
        </main>
    </ErrorBoundary>
);

export default App;
