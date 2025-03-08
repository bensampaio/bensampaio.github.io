import campusincLogo from './campusinc.png';
import catawikiLogo from './catawiki.svg';
import karifyLogo from './karify.png';
import safiraLogo from './safira.jpg';

export default [
  {
    title: 'Senior Frontend Engineer',
    institution: {
      url: 'http://www.catawiki.com/',
      logo: catawikiLogo,
      name: 'Catawiki',
    },
    period: { from: { month: 12, year: 2020 }, to: null },
    summary: '',
  },
  {
    title: 'Frontend Developer',
    institution: {
      url: 'http://www.karify.com/',
      logo: karifyLogo,
      name: 'Karify',
    },
    period: {
      from: { month: 5, year: 2016 },
      to: { month: 11, year: 2020 },
    },
    summary: `
            I was given the task of rebuilding the existing web frontend using React. This involved a lot of decision-making with stakeholders, building a design system together with a designer and defining a code style guide and quality assurance standards. In the meantime, I helped with the hiring of new developers and supervised a React Native project meant to replace the existing mobile apps.

            Technologies: JavaScript (ES 2015+), React, Redux, SASS, CSS Modules, Jest, Webpack, Node.js (express), ESLint, Stylelint, yarn workspaces.
        `,
  },
  {
    title: 'Frontend Developer',
    institution: {
      url: 'http://www.campusinc.nl/',
      logo: campusincLogo,
      name: 'CampusInc',
    },
    period: {
      from: { month: 12, year: 2014 },
      to: { month: 4, year: 2016 },
    },
    summary: `
            The company product was a social network that tried to fill the gap between the educational and the professional worlds.
            * Designed the frontend architecture of the product and built its UI components based on user experience best practices;
            * Participated in functional and technical analysis, including decision-making support concerning new features to be added to the product;
            * Migrated the frontend from ECMAScript 5 to 2015.
            
            Technologies: JavaScript (ECMAScript 2015), AngularJS, jQuery, Jasmine, Twitter Bootstrap, Webpack, Node.js, SASS, CSS3, HTML5, Bower, Gulp, Karma, Laravel, MySQL.
        `,
  },
  {
    title: 'Software Developer',
    institution: {
      url: 'http://www.safira.pt',
      logo: safiraLogo,
      name: 'SAFIRA',
    },
    period: {
      from: { month: 4, year: 2013 },
      to: { month: 12, year: 2014 },
    },
    summary: `
            Developed new IT solutions for Banif (a Portuguese bank) aiming to ease the bank credit workflow process.
            * Analyzed client methodologies and requirements to find the most appropriate solutions for their working model;
            * Designed and implemented several UI components based on user experience best practices;
            * Established the communication between different systems using exposed Web Services;
            * Participated on the database architecture design and implementation;
            * Provided technical assistance to users.
            After one year I was promoted to Expert Software Developer and the project continued, mainly in terms of bug fixing, change requests implementation, and technical assistance.
            * Participated in functional and technical analysis, including decision-making support concerning new features to be added to the product;
            * Reviewed code following the industry best practices for the used technologies on the project;
            * Managed the deployment life-cycle in the development staging and production environment.
            
            Technologies: IBM BPM 8.0.1, JavaScript (Client and Server side), jQuery, Bootstrap, HTML, CSS, XML, Java, and SQL Server.
        `,
  },
  {
    title: 'Software Developer',
    institution: {
      url: 'https://forumd.org/forumd/',
      name: 'Coggitare',
    },
    period: {
      from: { month: 6, year: 2012 },
      to: { month: 10, year: 2012 },
    },
    summary: `
            Developed the whole website and was responsible for all architectural decisions. In terms of UI and UX worked along side with a UX designer.
            Technologies: JavaScript, jQuery, HTML5, CSS3, PHP, CakePHP, and MySQL.
        `,
  },
];
