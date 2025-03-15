import { StaticImageData } from 'next/image';

import campusincLogo from './campusinc.png';
import catawikiLogo from './catawiki.svg';
import karifyLogo from './karify.png';
import safiraLogo from './safira.jpg';

type Job = {
  title: string;
  institution: {
    url: string;
    logo?: StaticImageData;
    name: string;
  };
  period: {
    from: { month: number; year: number };
    to: { month: number; year: number } | null;
  };
  summary: string;
};

export const experience: Job[] = [
  {
    title: 'Staff Frontend Engineer',
    institution: {
      url: 'http://www.catawiki.com/',
      logo: catawikiLogo,
      name: 'Catawiki',
    },
    period: { from: { month: 4, year: 2023 }, to: null },
    summary: `
      * Migrate or refactor existing solutions to modernize the codebase and simplify future feature development.
      * Participate in the technical design of features across teams.
      * Introduce a layer of integration tests with Playwright.
      * Moved to Portugal in May 2024 to start a tech hub in Lisbon.
    `,
  },
  {
    title: 'Web Frontend Guild Lead',
    institution: {
      url: 'http://www.catawiki.com/',
      logo: catawikiLogo,
      name: 'Catawiki',
    },
    period: { from: { month: 9, year: 2022 }, to: null },
    summary: `
      * Organized the migration of our global CSS to CSS Modules and our Ruby-based frontends to Next.js.
      * Goal setting, planning, and prioritization of the guild technical roadmap.
      * Manage tech weeks 5 times per year.
      * Distribute ownership and workload of internal libraries.
      * Improve our code style guide and ways of working as a guild.
      * Mentor peers on dealing with tough problems, effective communication, and getting things done.
      * Align with security, platform, and UX teams.
      * Communication with leadership about the state of the technological landscape of the Web Frontend.
    `,
  },
  {
    title: 'Senior Frontend Engineer',
    institution: {
      url: 'http://www.catawiki.com/',
      logo: catawikiLogo,
      name: 'Catawiki',
    },
    period: { from: { month: 12, year: 2020 }, to: { month: 3, year: 2023 } },
    summary: `
      I was a member of the Logistics team and the Web FE guild.

      * Migrated logistics-related pages from legacy technologies to React and TypeScript.
      * Participated in the redesign of the way our users submit their shipping and pickup information and rebuilt those flows using our modern stack.
      * Owned the component library which involved contributing new components, reviewing the contributions of others, and aligning with the UX team.
      * Interviewed new frontend candidates.
      * Onboarded new joiners to the team.
    `,
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
