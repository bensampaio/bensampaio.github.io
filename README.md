# Personal Website

## Summary

text

- Presents a person CV on a different way
- Composed by sections
- Top navbar and main page section


## Contents

- **db**: contains JSON files with the data to be presented on each section of the website:
  - basic.json: stores basic information about the person like its first, last and full name and its profile picture. This data is loaded from LinkedIn and is used to fill the top navigation bar.
  - info.json: stores general information about the person like its summary, skills, spoken languages, social profiles, interests and contacts. This data is used to fill the "Home Page" section.
  - experience.json: stores information about personal work experience. This data is used to fill the "Experience" section;
  - education.json: stores information about education. This data is used to fill the "Education" section;
  - projects.josn: stores information about personal projects. This data is used to fill the "Projects" section;
  - about.json: stores information about the website purpose and architecture (must not be changed). This data is used to fill the "About this Site" section;
  - extra.json: stores additional information that can be used to complement the data loaded from LinkedIn during its parse;
- **design**: contains the mockups for large and small screens of the website main layout;
- **libs**: contains server-side libs for NodeJS:
  - **LinkedIn**: libs related to the LinkedIn module:
    - parser.js: contains methods to parse and store each field of information loaded from LinkedIn;
  - utils.js: basic JavaScript utilities;
- **node_modules**: contains all the NodeJS modules used;
- **public**: contains all the public resources, sucha as, images, stylesheets and scripts:
  - **img**: contains all image files:
    - **flags**: flag icons used for languages presentation on the Home Page section;
    - **logos**: institutions logos for any place where the person has studied or worked;
    - **technologies**: logos of the technologies used to develop the website (must not be changed);
  - **js**: stores JavaScript client-side files:
    - **angular**: stores AngularJS modules;
    - **compatibility**: stores scripts used only for compatibility purposes;
    - app.js: application main module where are defined all constant variables, routes, and filters;
    - directives.js: application module where all directives are defined;
    - navigation.js: application module for navigation logic;
    - sections.js: application module for sections logic (uses a controller per section);
  - **styles**: stores stylesheet files:
    - **css**: stores CSS files generated from the compilation of SASS files;
    - **scss**: stores SASS files:
      - _config.scss: sets global configuration variables like font sizes, background colors, section colors, among others;
      - _tools.scss: defines general mixins;
      - _navigation.scss: top navigation bar styles;
      - _sections.scss: main sections styles;
      - general.scss: general styles (imports all the previous files);
- **views**: contains the HTML views specific for each section or element present on the website. Each section can have one or more views:
  - **elements**: stores HTML elements that can be reused on several pages (application directives);
  - **info**, **experience**, **education**, **projects**, **linkedin** and **about**: store HTML views for each respective section;
- index.html: main website layout;
- server.js: server start script;
- package.json: app metadata.


## Usage

- Fork and clone
- Not allowed to change about section

### Install and Run
- Install Node.js (mandatory)
- Install SASS (optional)

- Try http://0.0.0.0:8080

### Load your Data
- Create LinkedIn App
- Change db/extra.json
- Add flag icons and institutions logos

### Customize
- Run SASS on console
- Open file public/styles/scss/_config.scss