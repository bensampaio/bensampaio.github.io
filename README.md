# Personal Website

I created this website to present the most interesting and relevant aspects about me and my work in a more clean and simplified way. The website is mobile ready and is composed by the following **sections**:

- **Home Page** - general information about me;
- **Experience** - my work experience;
- **Education** - my courses and qualifications;
- **Projects** - some of my personal projects;
- **About** - information about the website purpose and architecture.

Bellow are described the file & folders structure and the usage instructions.

## Contents

- **db** - contains JS files with the data to be presented on each section of the website:
  - **me/index.js** - stores basic information about the person like its first, last and full name and its profile picture. This data is loaded from LinkedIn and is used to fill the top navigation bar.
  - **info/index.js** - stores general information about the person like its summary, skills, spoken languages, social profiles, interests and contacts. This data is used to fill the "Home Page" section.
  - **experience/index.js** - stores information about personal work experience. This data is used to fill the "Experience" section;
  - **education/index.js** - stores information about education. This data is used to fill the "Education" section;
  - **projects/index.js** - stores information about personal projects. This data is used to fill the "Projects" section;
  - **about/index.js** - stores information about the website purpose and architecture. This data is used to fill the "About" section;
- **node_modules** - contains all the Node.js modules used;
- **public** - contains all the public resources, such as, images, stylesheets and scripts:
- **package.json** - app metadata and dependencies.

## Usage

It is possible for you to use this website to present your personal information, but you will need to perform some actions and change some files. Besides the files referenced here, you can change whatever you want.

To start, first fork this repository and then clone it in your desktop.

### Install and run

Run `yarn install` and then `yarn build:dev`. Afterwards you should be able to visualize the website in [http://localhost:8080/](http://localhost:8080/). 

### Change the data

Change the data in the files in the **db** folder to contain your own data. Make sure it looks as you expect it.

### Ready? Go!

When you are done run `yarn build:prd` and then commit and push your changes. Your page should now be live on Github.
