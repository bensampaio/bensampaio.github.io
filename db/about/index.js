import babelLogo from './babel.png';
import cssLogo from './css.png';
import tsLogo from './ts.png';
import htmlLogo from './html.png';
import fontawesomeLogo from './fontawesome.png';
import jsLogo from './js.png';
import reactLogo from './react.png';
import reactRouterLogo from './reactRouter.png';
import sassLogo from './sass.png';
import webpackLogo from './webpack.png';
import yarnLogo from './yarn.png';

export default {
    goal: 'I created this site to present the most interesting and relevant aspects about me and my work in a more clean and simplified way.',
    technologies: {
        summary: `
			For the development of this website were used the usual Web technologies (HTML5, CSS3, JS), including some of the most used client-side frameworks at the moment (React and SASS).
			The website was tested on the most recent desktop and mobile browsers, such as, Google Chrome, Mozilla Firefox, Safari, Opera, and Edge.
			If you would like to check the code or if you would like to create your own website using this layout you can find the repository and documentation [here](https://github.com/bensampaio/bensampaio.github.io).
		`,
        client: [
            {
                id: 'html',
                url: 'http://www.w3.org/TR/html5/',
                desc: 'HTML',
                logo: htmlLogo,
            },
            {
                id: 'css',
                url: 'http://www.w3.org/TR/CSS/',
                desc: 'CSS',
                logo: cssLogo,
            },
            {
                id: 'js',
                url: '',
                desc: 'JavaScript',
                logo: jsLogo,
            },
            {
                id: 'sass',
                url: 'http://sass-lang.com/',
                desc: 'SASS',
                logo: sassLogo,
            },
            {
                id: 'react',
                url: 'https://reactjs.org/',
                desc: 'React',
                logo: reactLogo,
            },
            {
                id: 'react-router',
                url: '',
                desc: 'React Router',
                logo: reactRouterLogo,
            },
            {
                id: 'fontawesome',
                url: 'https://fontawesome.com/',
                desc: 'Font Awesome',
                logo: fontawesomeLogo,
            },
        ],
        tools: [
            {
                id: 'yarn',
                url: 'https://yarnpkg.com/',
                desc: 'Yarn',
                logo: yarnLogo,
            },
            {
                id: 'babel',
                url: 'https://babeljs.io/',
                desc: 'Babel',
                logo: babelLogo,
            },
            {
                id: 'typescript',
                url: 'https://www.typescriptlang.org/',
                desc: 'TypeScript',
                logo: tsLogo,
            },
            {
                id: 'webpack',
                url: 'https://webpack.js.org/',
                desc: 'Webpack',
                logo: webpackLogo,
            },
        ],
    },
    credits: {
        developers: [
            {
                name: 'Bruno Sampaio',
                url: 'https://bensampaio.github.io',
            },
        ],
        designers: [
            {
                name: 'Bruno Sampaio',
                url: 'https://bensampaio.github.io',
            },
            {
                name: 'Inês Sampaio',
                url: 'http://cargocollective.com/semente',
            },
        ],
        others: [
            {
                name: 'plamenj',
                desc: 'created the palette of colors used on the main website sections',
                url: 'http://www.colourlovers.com/lover/plamenj/loveNote',
                item: {
                    name: 'GameBookers',
                    url: 'http://www.colourlovers.com/palette/148712/Gamebookers',
                },
            },
            {
                name: 'Popcic',
                desc: 'designed the favicon',
                url: 'https://www.iconfinder.com/popcic',
                item: {
                    name: 'icon',
                    url: 'https://www.iconfinder.com/icons/274900/avatar_badge_business_circle_human_id_male_man_people_person_profile_user_icon#size=16',
                },
            },
            {
                name: 'GoSquared',
                desc: 'designed the flag icons used for the languages list',
                url: 'https://www.gosquared.com/',
                item: {
                    name: 'icon set',
                    url: 'https://www.gosquared.com/resources/flag-icons/',
                },
            },
        ],
    },
};
