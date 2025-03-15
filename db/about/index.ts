import { StaticImageData } from 'next/image';

import cssLogo from './css.png';
import eslintLogo from './eslint.png';
import tsLogo from './ts.png';
import htmlLogo from './html.png';
import fontawesomeLogo from './fontawesome.png';
import jsLogo from './js.png';
import reactLogo from './react.png';
import nextLogo from './nextjs.png';
import prettierLogo from './prettier.png';
import sassLogo from './sass.png';
import stylelintLogo from './stylelint.png';
import tailwindLogo from './tailwind.svg';
import yarnLogo from './yarn.png';

type Technology = {
  id: string;
  url: string;
  desc: string;
  logo: StaticImageData;
};

type Contributor = {
  desc?: string;
  name: string;
  url: string;
};

type About = {
  goal: string;
  technologies: {
    summary: string;
    client: Technology[];
    tools: Technology[];
  };
  credits: {
    developers: Contributor[];
    designers: Contributor[];
    others: (Contributor & {
      item: {
        name: string;
        url: string;
      };
    })[];
  };
};

export const about: About = {
  goal: 'I created this site to present the most interesting and relevant aspects about me and my work in a more clean and simplified way.',
  technologies: {
    summary: `
			For the development of this website were used modern Web technologies like TypeScript, React and SASS.
			The website was tested on the most recent desktop and mobile browsers, such as, Google Chrome, Mozilla Firefox, Safari, Opera, and Edge.
			If you would like to check the code or if you would like to create your own website using this layout you can find the repository and documentation [here](https://github.com/bensampaio/bensampaio.github.io).
		`,
    client: [
      {
        id: 'html',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        desc: 'HTML',
        logo: htmlLogo,
      },
      {
        id: 'css',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        desc: 'CSS',
        logo: cssLogo,
      },
      {
        id: 'js',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        desc: 'JavaScript',
        logo: jsLogo,
      },
      {
        id: 'react',
        url: 'https://reactjs.org/',
        desc: 'React',
        logo: reactLogo,
      },
      {
        id: 'next',
        url: 'https://nextjs.org/',
        desc: 'Next.js',
        logo: nextLogo,
      },
      {
        id: 'tailwind',
        url: 'https://tailwindcss.com/',
        desc: 'Tailwind',
        logo: tailwindLogo,
      },
      {
        id: 'sass',
        url: 'http://sass-lang.com/',
        desc: 'SASS',
        logo: sassLogo,
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
        id: 'eslint',
        url: 'https://eslint.org/',
        desc: 'ESLint',
        logo: eslintLogo,
      },
      {
        id: 'prettier',
        url: 'https://prettier.io/',
        desc: 'Prettier',
        logo: prettierLogo,
      },
      {
        id: 'stylelint',
        url: 'https://stylelint.io/',
        desc: 'Stylelint',
        logo: stylelintLogo,
      },
      {
        id: 'typescript',
        url: 'https://www.typescriptlang.org/',
        desc: 'TypeScript',
        logo: tsLogo,
      },
      {
        id: 'yarn',
        url: 'https://yarnpkg.com/',
        desc: 'Yarn',
        logo: yarnLogo,
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
