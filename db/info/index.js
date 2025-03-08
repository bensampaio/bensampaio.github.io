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

export default {
  summary: `
        I'm passionate for Web development, mainly in terms of Front-end development. I'm always ready to learn and improve my skills. I like working with open-minded, fun, diversified, and dynamic teams with fresh ideas that push the boundaries.
        I have a good knowledge of JavaScript which allows me to code up from scratch a fully responsive and mobile first site in plain HTML5, CSS3, React and NodeJS (for example).
    `,
  languages: [
    { name: 'Portuguese', code: 'pt', flag: ptFlag, level: 'Native' },
    { name: 'English', code: 'en', flag: enFlag, level: 'Proficient' },
  ],
  skills: [
    { name: 'HTML 5', icon: faHtml5 },
    { name: 'CSS3', icon: faCss3 },
    { name: 'SASS', icon: faSass },
    { name: 'JavaScript', icon: faJs },
    { name: 'TypeScript' },
    { name: 'React', icon: faReact },
    { name: 'Redux' },
    { name: 'Node.js', icon: faNodeJs },
    { name: 'Next.js' },
    { name: 'Webpack' },
    { name: 'Jest' },
    { name: 'Cypress' },
    { name: 'Jasmine' },
    { name: 'jQuery' },
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
    'Cooking',
    'Cinema',
    'Literature',
    'Bouldering',
    'Lindyhop',
    'Yoga',
    'Board Games',
    'Video Games',
  ],
};
