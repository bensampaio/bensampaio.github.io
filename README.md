# Personal Website

I created this website to present the most interesting and relevant aspects about me and my work in a more clean and simplified way. The website is mobile ready and is composed by the following **sections**:

- **Home Page** - general information about me;
- **Experience** - my work experience;
- **Education** - my courses and qualifications;
- **Projects** - some of my personal projects;
- **LinkedIn** - for integration with LinkedIn (available only on localhost);
- About this site: information about the website purpose and architecture.

All the data to populate the first 4 sections is loaded from LinkedIn using the LinkedIn Profile API.

Bellow are described the file & folders structure and the usage instructions.


## Contents

- **db** - contains JSON files with the data to be presented on each section of the website:
  - **basic.json** - stores basic information about the person like its first, last and full name and its profile picture. This data is loaded from LinkedIn and is used to fill the top navigation bar.
  - **info.json** - stores general information about the person like its summary, skills, spoken languages, social profiles, interests and contacts. This data is used to fill the "Home Page" section.
  - **experience.json** - stores information about personal work experience. This data is used to fill the "Experience" section;
  - **education.json** - stores information about education. This data is used to fill the "Education" section;
  - **projects.json** - stores information about personal projects. This data is used to fill the "Projects" section;
  - **about.json** - stores information about the website purpose and architecture (must not be changed). This data is used to fill the "About this Site" section;
  - **extra.json** - stores additional information that can be used to complement the data loaded from LinkedIn during its parse;
- **design** - contains the mockups for large and small screens of the website main layout;
- **libs** - contains server-side libs for Node.js:
  - **LinkedIn** - libs related to the LinkedIn module:
    - **parser.js** - contains methods to parse and store each field of information loaded from LinkedIn;
  - **utils.js** - basic JavaScript utilities;
- **node_modules** - contains all the Node.js modules used;
- **public** - contains all the public resources, sucha as, images, stylesheets and scripts:
  - **img** - contains all image files:
    - **flags** - flag icons used for languages presentation on the Home Page section;
    - **logos** - institutions logos for any place where the person has studied or worked;
    - **technologies** - logos of the technologies used to develop the website (must not be changed);
  - **js** - stores JavaScript client-side files:
    - **angular** - stores AngularJS modules;
    - **compatibility** - stores scripts used only for compatibility purposes;
    - **app.js** - application main module where are defined all constant variables, routes, and filters;
    - **directives.js** - application module where all directives are defined;
    - **navigation.js** - application module for navigation logic;
    - **sections.js** - application module for sections logic (uses a controller per section);
  - **styles** - stores stylesheet files:
    - **css** - stores CSS files generated from the compilation of SASS files;
    - **scss** - stores SASS files:
      - **_config.scss** - sets global configuration variables like font sizes, background colors, section colors, among others;
      - **_tools.scss** - defines general mixins;
      - **_navigation.scss** - top navigation bar styles;
      - **_sections.scss** - main sections styles;
      - **general.scss** - general styles (imports all the previous files);
- **views** - contains the HTML views specific for each section or element present on the website. Each section can have one or more views:
  - **elements** - stores HTML elements that can be reused on several pages (application directives);
  - **info**, **experience**, **education**, **projects**, **linkedin** and **about** - store HTML views for each respective section;
- **index.html** - main website layout;
- **server.js** - server start script;
- **package.json** - app metadata.


## Usage

It is possible for you to use this website to present your personal information, but you will need to perform some actions and change some files. Besides the files referenced here, you can change whatever you want, less the About section (you can only increment its contents not change it).

To start fork this repository and then clone it in your desktop.


### Install and Run
To load your data from LinkedIn you will need to install [Node.js](http://nodejs.org/) on your Desktop (the recommended version is 0.10).
In case you also want to change the stylesheets you will need to install [SASS](http://sass-lang.com/) (the recommended version is 3.4.7).

After installing Node.js open a console window and run the following commands:

> cd \<path_to_website_root_directory\>

> sudo node server.js

Now try to access to http://0.0.0.0:8080 (make sure you have no other applications running on this port). 


### Load your Data

#### Register your Application on LinkedIn API

To load your data from LinkedIn you first need to create a new application with access to LinkedIn API. For that go [here](https://www.linkedin.com/secure/developer?newapp=) and do the following:

- Fill the application info and contact info with whatever you want;
- On the Oauth User Agreement section:
  - On **Default Scope** field select: r_emailaddress, r_basicprofile, r_fullprofile, and r_contactinfo;
  - On **OAuth 2.0 Redirect URLs** field put: http://0.0.0.0:8080/linkedin/connect/callback;

Then click save. You will then be redirected to the applications page and there will be an application with the name you chose. Open it and you will see a section with OAuth Keys. You'll need those keys later on to load your data from LinkedIn, but first you need to change some things.


#### Format the information on your LinkedIn profile

The parser will look for some specific elements on some fields of your profile, if you format them as expected your data will look better on the website:
- Long text fields:
  - Each line break will be interpreted as a paragraph (subsequent line breaks are ignored if there is no text between them);
  - Each line started with a hyphen represents an item of a list of items.
- Project names: if there is an hyphen in the middle of the name, the words to the left of it will be considered as the company name, and the words to the right as the project name.

#### Add additional information

Go to the website root directory and open the file: db/extra.json. You must change the content of this file. Below is an explanation of each field it contains:

- **summary**:
  - **paragraphs** - number of paragraphs to read from your summary (if you want all just remove this field);
- **languages** - add each language you have on your LinkedIn profile to this field. The key for each one must be the language name in lower case, and the value must be an object with a language code, name of flag image file, and level of proficiency. You can find flag image files [here](https://www.gosquared.com/resources/flag-icons/), choose the 48x48 ones and add them to public/img/flags.
- **institutions** - add each company you worked for or each university / school you studied on to this field. The key for companies must be their name in lower case (replace spaces by underscores), and the key for universities / schools must be composed by the first letter of each word in the name also in lower case. For each institution provide a URL (empty string if none) and a logo image file (put false if none). The logo file must be stored in public/img/logos.
- **pages** - list of social networks profiles (this list is displayed on the Home Page). For each profile you must provide a name, icon class from Font Awesome, and a URL to your public profile;
- **projects** - in case you have videos of your projects you can add them here. As key use the project name separated by underscores, and as value provide a video field with a URL for the video on Youtube.

#### Ready? Go!

When you finish all the steps above do the following:
- Go to http://0.0.0.0:8080/#/linkedin/connect;
- Fill the fields on this page with the information on the application you registered on LinkedIn;
- Press the submit button;
- If this is the first time you load your data you will probably be redirected to LinkedIn. If that happens, press the Allow button;
- You will eventually be redirected to http://0.0.0.0:8080/#/linkedin/load;
- Press the Load button with Profile option selected;
- Wait for a success / error page (hope it is the first);
- Go to the Home Page and refresh the page (you should see your data on all sections now).

You can repeat this process as many times as you want.


### Customize

If you want to customize the website a bit, start by running the following commands on a console window:

> cd <path_to_website_root_directory>/public/styles

> sass --watch --style:compressed scss:css

Leave this running while you change SCSS files.

Try to change some of the values in public/styles/scss/_config.scss. If you want to change more things feel free to open the other SCSS files on this directory!
