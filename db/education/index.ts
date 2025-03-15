import { StaticImageData } from 'next/image';

import tudLogo from './tud.png';
import unlLogo from './unl.png';

type University = {
  degree: string;
  field: string;
  institution: {
    url: string;
    logo: StaticImageData;
    name: string;
  };
  period: {
    from: { year: number };
    to: { year: number };
  };
  summary: string;
};

export const education: University[] = [
  {
    degree: 'Master',
    field: 'Computer Science Engineering',
    institution: {
      url: 'http://www.fct.unl.pt/',
      logo: unlLogo,
      name: 'Universidade Nova de Lisboa',
    },
    period: { from: { year: 2010 }, to: { year: 2013 } },
    summary: `
            Master thesis:
            * Investigated the use of games in education and the effectiveness of collaboration as a teaching method;
            * Built a web platform for the development, distribution and execution of collaborative educational games with singleplayer and multiplayer mode. Technologies: JavaScript, jQuery, KineticJS, JSON, HTML5, CSS3, PHP, CakePHP, NodeJS, XML, XML Schema, MySQL;
            * Built several plugins for Moodle that provide new ways of interaction and collaboration between teachers and students, new awareness indicators, and new forms of integration with external systems. My work can be found on https://moodle.org/plugins/browse.php?list=set&id=31 and on my Github. Technologies: JavaScript, JSON, YUI, HTML5, CSS3, PHP, XML, MySQL.
        `,
  },
  {
    degree: 'Master',
    field: 'Computational Engineering',
    institution: {
      url: 'http://tu-dresden.de/en',
      logo: tudLogo,
      name: 'Technische Universität Dresden',
    },
    period: { from: { year: 2011 }, to: { year: 2011 } },
    summary: 'ERASMUS',
  },
  {
    degree: 'Bachelor',
    field: 'Computer Science Engineering',
    institution: {
      url: 'http://www.fct.unl.pt/',
      logo: unlLogo,
      name: 'Universidade Nova de Lisboa',
    },
    period: { from: { year: 2006 }, to: { year: 2010 } },
    summary: '',
  },
];
