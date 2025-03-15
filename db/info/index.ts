import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { StaticImageData } from 'next/image';
import enFlag from './en.png';
import ptFlag from './pt.png';
import {
  faAngular,
  faApple,
  faCss3,
  faFacebookSquare,
  faGithubSquare,
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

type Info = {
  summary: string;
  languages: {
    name: string;
    code: string;
    flag: StaticImageData;
    level: string;
  }[];
  skills: {
    name: string;
    icon?: IconDefinition;
  }[];
  socials: {
    name: string;
    icon: { color: string; src: IconDefinition };
    url: string;
  }[];
  interests: string[];
};

export const info: Info = {
  summary: `
        I'm passionate for Web development, mainly Front-end development. I'm always ready to learn and improve my skills. I like working with open-minded, fun, diversified, and dynamic teams with fresh ideas that push the boundaries.
        My knowledge of JavaScript and TypeScript allows me to, for instance, code up from scratch a fully responsive and mobile-first site in plain HTML5, CSS3, React, and Next.js.
    `,
  languages: [
    { name: 'Portuguese', code: 'pt', flag: ptFlag, level: 'Native' },
    { name: 'English', code: 'en', flag: enFlag, level: 'Proficient' },
  ],
  skills: [
    { name: 'HTML 5', icon: faHtml5 },
    { name: 'CSS3', icon: faCss3 },
    { name: 'Tailwind', icon: faSass },
    { name: 'SASS', icon: faSass },
    { name: 'JavaScript', icon: faJs },
    { name: 'TypeScript' },
    { name: 'Vite' },
    { name: 'React', icon: faReact },
    { name: 'Redux' },
    { name: 'Next.js' },
    { name: 'Jest' },
    { name: 'Playwright' },
    { name: 'Node.js', icon: faNodeJs },
    { name: 'Webpack' },
    { name: 'Storybook' },
    { name: 'jQuery' },
    { name: 'Cypress' },
    { name: 'Jasmine' },
    { name: 'Angular', icon: faAngular },
    { name: 'PHP', icon: faPhp },
    { name: 'Laravel' },
    { name: 'CakePHP' },
    { name: 'MySQL' },
    { name: 'XML' },
    { name: 'JSON' },
    { name: 'Twitter Bootstrap' },
    { name: 'Gulp', icon: faGulp },
    { name: 'Java', icon: faJava },
    { name: 'Photoshop' },
    { name: 'REST' },
    { name: 'Web Development' },
    { name: 'XML Schema' },
    { name: 'XPath' },
    { name: 'XQuery' },
    { name: 'XSLT' },
    { name: 'PostgreSQL' },
    { name: 'Microsoft SQL Server' },
    { name: 'Mac OS X', icon: faApple },
    { name: 'Windows', icon: faWindows },
    { name: 'Linux', icon: faLinux },
    { name: 'UML' },
    { name: 'LaTeX' },
    { name: 'Design Patterns' },
    { name: 'OOP' },
    { name: 'Software Engineering' },
    { name: 'User Interface Design' },
  ],
  socials: [
    {
      name: 'LinkedIn',
      icon: { src: faLinkedin, color: 'text-linkedin' },
      url: 'https://www.linkedin.com/in/bensampaio',
    },
    {
      name: 'Github',
      icon: { src: faGithubSquare, color: 'text-github' },
      url: 'https://github.com/bensampaio',
    },
    {
      name: 'Facebook',
      icon: { src: faFacebookSquare, color: 'text-facebook' },
      url: 'https://www.facebook.com/glutenfree.sampaio',
    },
    {
      name: 'Twitter',
      icon: { src: faTwitterSquare, color: 'text-twitter' },
      url: 'https://www.twitter.com/bensampaio88',
    },
  ],
  interests: [
    'Traveling',
    'Beach',
    'Hiking',
    'Cooking',
    'Baking',
    'Movies',
    'Series',
    'Bouldering',
    'Lindyhop',
    'Yoga',
    'Board Games',
    'Video Games',
  ],
};
